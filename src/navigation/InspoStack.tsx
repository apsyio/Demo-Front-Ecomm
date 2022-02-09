import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ChevronBackButton} from '~/components/atoms';
import {BrandDetailsScreen, PostsScreen} from '~/screens/brands';
import {MyProfileScreen} from '~/screens/home';
import {InspoScreen, OutfitScreen} from '~/screens/inspo';
import {Colors} from '~/styles';

const Stack = createNativeStackNavigator();

export type InspoStackParamList = {
  InspoScreen: undefined;
  Outfit: {uri: string};
  BrandDetails: {id: number};
  Posts: undefined;
  MyProfile: {id: number};
};

const screens = [
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
      title: 'inspirations',
    },
    name: 'Inspo',
    component: InspoScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
      title: 'Outfit Name',
    },
    name: 'Outfit',
    component: OutfitScreen,
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
      title: 'Brand',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'BrandDetails',
    component: BrandDetailsScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'Posts',
    component: PostsScreen,
  },
];

export default function InspoStack({
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
