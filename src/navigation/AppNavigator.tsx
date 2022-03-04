import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useIsFetching, useIsMutating} from 'react-query';
import {useRecoilState} from 'recoil';

import {CustomSpinner} from '~/components/atoms';
import OnboardingScreen from '~/screens/OnboardingScreen';
import {isUserLoggedInState} from '~/store';
import isOnboardingViewedState from '~/store/isOnboardingViewedState';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {navigate, navigationRef} from './methods';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const linking = {
    prefixes: ['https://cuethecurves.com', 'cuethecurves://'],
    config: {
      screens: {
        StyleDetails: 'StyleDetails/:id',
      },
    },
    getStateFromPath: (path: string) => {
      // Return a state object here
      // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`

      if (path) {
        const splitedPath = path?.split('/');
        if (splitedPath[0] === 'StyleDetails') {
          const id = +splitedPath[1];
          navigate('StyleDetails', {id});
        }
      }
    },
  };

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const [isOnboardingViewed] = useRecoilState(isOnboardingViewedState);
  const [isUserLoggedIn] = useRecoilState(isUserLoggedInState);

  return (
    <>
      <CustomSpinner visible={!!isFetching || !!isMutating} />

      <NavigationContainer ref={navigationRef} linking={linking}>
        <Stack.Navigator>
          {!isOnboardingViewed && (
            <Stack.Screen
              options={{headerShown: false}}
              name="Onboarding"
              component={OnboardingScreen}
            />
          )}

          {isUserLoggedIn ? (
            <Stack.Screen
              options={{headerShown: false}}
              name="MainStack"
              component={MainStack}
            />
          ) : (
            <Stack.Screen
              options={{headerShown: false}}
              name="AuthStack"
              component={AuthStack}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
