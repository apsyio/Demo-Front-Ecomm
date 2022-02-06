import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SelectStyleScreen} from '~/screens/auth';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Signin: undefined;
};

const screens = [
  // {
  //   options: {
  //     headerShown: false,
  //   },
  //   name: 'Signin',
  //   component: SigninScreen,
  // },
  // {
  //   options: {
  //     headerShown: false,
  //   },
  //   name: 'Signup',
  //   component: SignupScreen,
  // },
  // {
  //   options: {
  //     headerShown: false,
  //   },
  //   name: 'ForgotPassword',
  //   component: ForgotPasswordScreen,
  // },
  {
    options: {
      headerShown: false,
    },
    name: 'SelectStyle',
    component: SelectStyleScreen,
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
