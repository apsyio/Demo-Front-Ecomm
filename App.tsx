console.warn = () => null;
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {extendTheme, NativeBaseProvider} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';

import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import AppNavigator from '~/navigation/AppNavigator';
import {useStore} from '~/store';
import {Colors} from '~/styles';

let queryClient: QueryClient;

export default function App() {
  const setIsUserLoggedIn = useStore(state => state.setIsUserLoggedIn);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  const handleUser = useCallback(
    async user => {
      if (user) {
        const idToken = await auth().currentUser?.getIdToken();
        console.log('idToken', idToken);
        if (idToken) {
          graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
        }
        queryClient.invalidateQueries();
      } else {
        graphQLClient.setHeader('authorization', '');
        setIsUserLoggedIn(false);
        AsyncStorage.clear();
        queryClient.clear();
      }
      if (initializing) {
        setInitializing(false);
      }
    },
    [initializing, setIsUserLoggedIn],
  );

  useEffect(() => {
    const unsubscribe = auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, [handleUser]);

  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: (error: any) => {
        console.log(error);

        Alert.alert('Error', `Something went wrong: ${error.message}`);
      },
      onSuccess: async (data: any) => {
        const apiName = Object.keys(data)[0];
        const first = data[apiName];
        const status = first?.status;

        if (
          status === ResponseStatus.AuthenticationFailed ||
          (Array.isArray(first) &&
            first[0][Object.keys(first[0])[0]].status ===
              ResponseStatus.AuthenticationFailed)
        ) {
          try {
            await auth().signOut();
          } catch (error) {
            setIsUserLoggedIn(false);
          }
        }
      },
    }),
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = extendTheme({
    components: {
      Text: {
        defaultProps: {
          fontSize: 'md',
        },
      },
      Input: {
        defaultProps: {
          size: '2xl',
          p: 3,
        },
      },
      Button: {
        defaultProps: {
          _pressed: {opacity: 0.5},
          padding: 4,
        },
        // Can simply pass default props to change default behaviour of components.
        variants: {
          primary: {
            bg: Colors.ROUGE,
            rounded: 'full',
          },
          outline: {
            borderColor: Colors.ROUGE,
            rounded: 'full',
            _text: {
              color: Colors.ROUGE,
            },
          },
          sub: {
            _text: {
              color: Colors.SHADY_LADY,
            },
          },
        },
      },
    },
  });

  if (initializing) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
