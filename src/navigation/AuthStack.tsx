import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {ForgotPasswordScreen, SignupScreen} from '~/screens/auth';
import SigninScreen from '~/screens/auth/SigninScreen';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Signin: undefined;
};

const screens = [
  {
    options: {
      headerShown: false,
    },
    name: 'Signin',
    component: SigninScreen,
  },
  {
    options: {
      headerShown: false,
    },
    name: 'Signup',
    component: SignupScreen,
  },
  {
    options: {
      headerShown: false,
    },
    name: 'ForgotPassword',
    component: ForgotPasswordScreen,
  },
];

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {screens.map(s => (
        <Stack.Screen key={s.name} {...s} />
      ))}
    </Stack.Navigator>
  );
}
