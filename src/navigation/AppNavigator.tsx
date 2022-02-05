import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import OnboardingScreen from '~/screens/OnboardingScreen';

import AuthStack from './AuthStack';
import {navigationRef} from './methods';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Onboarding"
            component={OnboardingScreen}
          />

          <Stack.Screen
            options={{headerShown: false}}
            name="AuthStack"
            component={AuthStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
