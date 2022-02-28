import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';

import ChevronBackButton from '~/components/atoms/ChevronBackButton';
import {FeedsScreen} from '~/screens/feed';
import {Colors} from '~/styles';

const Stack = createNativeStackNavigator();

export type FeedStackParamList = {
  Feeds: undefined;
};

const screens = [
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'Feed',
    component: FeedsScreen,
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
    const tabHiddenRoutes = [];
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
