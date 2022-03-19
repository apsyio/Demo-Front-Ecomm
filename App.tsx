console.warn = () => null;
console.error = () => null;
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAtom} from 'jotai';
import {extendTheme, NativeBaseProvider, Toast} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import Config from 'react-native-config';
import {Settings} from 'react-native-fbsdk-next';
import SplashScreen from 'react-native-splash-screen';
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import AppNavigator from '~/navigation/AppNavigator';
import {isUserLoggedInAtom} from '~/store';
import {Colors} from '~/styles';

let queryClient: QueryClient;

export default function App() {
  const [, setIsUserLoggedIn] = useAtom(isUserLoggedInAtom);

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
        // AsyncStorage.clear();
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

        Toast.show({
          title: 'Error',
          status: 'error',
          description: `Something went wrong: ${error.message}`,
        });
      },
      onSuccess: async (data: any) => {
        const [apiName] = Object.keys(data);
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

        if (status && status !== ResponseStatus.Success) {
          Toast.show({
            title: 'Error',
            status: 'error',
            description: status,
          });
        }
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: any) => {
        Toast.show({
          title: 'Error',
          status: 'error',
          description: `Something went wrong: ${error?.message}`,
        });
      },
      onSuccess: async (data: any) => {
        const [apiName] = Object.keys(data);
        const first = data[apiName];
        const status = first?.status;

        if (status === ResponseStatus.AuthenticationFailed) {
          try {
            await auth().signOut();
          } catch (error) {
            setIsUserLoggedIn(false);
          }
        }
        if (status && status !== ResponseStatus.Success) {
          Toast.show({
            title: 'Error',
            status: 'error',
            description: status,
          });
        }
      },
    }),
  });

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID, // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });

    Settings.initializeSDK();
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = extendTheme({
    components: {
      Toast: {
        defaultProps: {
          placement: 'top',
        },
      },
      Text: {
        defaultProps: {
          fontSize: 'md',
        },
      },
      Input: {
        defaultProps: {
          size: '2xl',
          p: 2,
        },
      },
      Button: {
        defaultProps: {
          _pressed: {opacity: 0.5},
          padding: 3,
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
