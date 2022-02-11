import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import OnboardingScreen from '~/screens/OnboardingScreen';
import {onboardingStore} from '~/store';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {navigationRef} from './methods';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const isOnboardingViewed = onboardingStore(state => state.isOnboardingViewed);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {!isOnboardingViewed && (
            <Stack.Screen
              options={{headerShown: false}}
              name="Onboarding"
              component={OnboardingScreen}
            />
          )}

          <Stack.Screen
            options={{headerShown: false}}
            name="AuthStack"
            component={AuthStack}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="MainStack"
            component={MainStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
