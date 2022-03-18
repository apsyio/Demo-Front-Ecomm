import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import {ChevronBackButton} from '~/components/atoms';
import type {Maybe} from '~/generated/graphql';
import {
  BrandDetailsScreen,
  BrandsScreen,
  FilterBrandSizeScreen,
  PostsScreen,
  WriteReviewOrPostScreen,
} from '~/screens/brands';
import {Colors} from '~/styles';

const Stack = createNativeStackNavigator();

export type BrandsStackParamList = {
  Brands: {sizes?: (Maybe<string> | undefined)[]};
  FilterBrandSize: {sizes?: (Maybe<string> | undefined)[]};
  BrandDetails: {id: number};
  Posts: {brandId?: number; styleId?: number};
  WriteReviewOrPost: {brandId?: number; styleId?: number};
};

const screens = [
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
      title: 'Filter',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'FilterBrandSize',
    component: FilterBrandSizeScreen,
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

export default function BrandsStack({
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
