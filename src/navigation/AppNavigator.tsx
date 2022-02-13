import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useIsFetching, useIsMutating} from 'react-query';

import {CustomSpinner} from '~/components/atoms';
import useSignin from '~/hooks/auth/useSignin';
import OnboardingScreen from '~/screens/OnboardingScreen';
import {useStore} from '~/store';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {navigationRef} from './methods';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const isOnboardingViewed = useStore(state => state.isOnboardingViewed);
  const isUserLoggedIn = useStore(state => state.isUserLoggedIn);

  const {mutate} = useSignin();

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <>
      <CustomSpinner visible={!!isFetching || !!isMutating} />

      <NavigationContainer ref={navigationRef}>
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
