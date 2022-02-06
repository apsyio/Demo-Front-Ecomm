import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {
  ForgotPasswordScreen,
  SelectAccountTypeScreen,
  SelectFavoriteBrandScreen,
  SelectStyleScreen,
  SigninScreen,
  SignupScreen,
} from '~/screens/auth';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Signin: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  SelectStyle: undefined;
  SelectFavoriteBrand: undefined;
  SelectAccountType: undefined;
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
  {
    options: {
      headerShown: false,
    },
    name: 'SelectStyle',
    component: SelectStyleScreen,
  },
  {
    options: {
      headerShown: false,
    },
    name: 'SelectFavoriteBrand',
    component: SelectFavoriteBrandScreen,
  },
  {
    options: {
      headerShown: false,
    },
    name: 'SelectAccountType',
    component: SelectAccountTypeScreen,
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
