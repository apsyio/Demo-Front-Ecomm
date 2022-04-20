import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ChevronBackButton} from '~/components/atoms';
import {
  BrandDetailsScreen,
  BrandsScreen,
  PostsScreen,
  WriteReviewOrPostScreen,
} from '~/screens/brands';
import {StyleDetailsScreen, StylesScreen} from '~/screens/styles';
import {Colors} from '~/styles';

const Stack = createNativeStackNavigator();

export type StylesStackParamList = {
  Styles: undefined;
  StyleDetails: {id: number};
  BrandsScreen: undefined;
  BrandDetails: {id: number};
  Posts: {brandId?: number; styleId?: number};
};

const screens = [
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Shop by style',
      // headerLeft: () => <ChevronBackButton />,
    },
    name: 'Styles',
    component: StylesScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Style',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'StyleDetails',
    component: StyleDetailsScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'Brands',
    component: BrandsScreen,
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
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'WriteReviewOrPost',
    component: WriteReviewOrPostScreen,
  },
];

export default function StylesStack({
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
