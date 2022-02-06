import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ChevronBackButton} from '~/components/atoms';
import {
  HomeScreen,
  MyProfileScreen,
  ProfileScreen,
  SettingsScreen,
  SupportScreen,
} from '~/screens/home';
import {Colors} from '~/styles';

import {navigate} from './methods';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
  MyProfile: undefined;
  SettingsScreen: undefined;
  SupportScreen: undefined;
};

const screens = [
  {
    options: {headerShown: false},
    name: 'Home',
    component: HomeScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Profile',
      headerLeft: () => <ChevronBackButton />,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigate('Settings')}>
          <Icon as={<MaterialCommunityIcon name="cog" />} />
        </TouchableOpacity>
      ),
    },
    name: 'Profile',
    component: ProfileScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Profile',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'MyProfile',
    component: MyProfileScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Settings',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'Settings',
    component: SettingsScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Support',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'Support',
    component: SupportScreen,
  },
];

export default function FeedStack({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  useLayoutEffect(() => {
    const tabHiddenRoutes: (string | undefined)[] = [];
    navigation.setOptions({
      tabBarStyle: {
        display: tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))
          ? 'none'
          : 'flex',
      },
    });
  }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      {screens.map(x => (
        <Stack.Screen
          key={x.name}
          options={x.options}
          name={x.name}
          component={x.component}
        />
      ))}
    </Stack.Navigator>
  );
}
