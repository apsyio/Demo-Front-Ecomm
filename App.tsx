console.warn = () => null;
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

  return (
    <NativeBaseProvider theme={theme}>
      <AppNavigator />
    </NativeBaseProvider>
  );
}
