import {extendTheme, NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from '~/navigation/AppNavigator';
import {Colors} from '~/styles';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        variants: {
          primary: {
            bg: Colors.ROUGE,
            rounded: 'full',
            _pressed: {opacity: 0.8},
          },
          outline: {
            borderColor: Colors.ROUGE,
            rounded: 'full',
            _pressed: {opacity: 0.8},
            _text: {
              color: Colors.ROUGE,
            },
          },
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
