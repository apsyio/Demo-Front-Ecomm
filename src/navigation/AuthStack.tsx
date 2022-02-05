import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SigninScreen from '~/screens/auth/SigninScreen';

const Stack = createNativeStackNavigator();

export type AuthStackParamList = {
  Signin: undefined;
};

const screens = [
  {
    options: {
      title: '',
      headerShown: false,
    },
    name: 'Signin',
    component: SigninScreen,
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
