import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';

import BrandsStack from './BrandsStack';
import FeedStack from './FeedStack';
import HomeStack from './HomeStack';
import InspoStack from './InspoStack';
import StylesStack from './StylesStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {
          backgroundColor: Colors.APRICOT_PEACH,
        },
        tabBarIcon: ({focused, color}) => {
          let name = '';
          switch (route.name) {
            case 'Home':
              name = 'home';
              break;
            case 'Brands':
              name = 'tag';
              break;
            case 'Feed':
              name = 'heart';
              break;
            case 'Styles':
              name = 'hanger';
              break;
            case 'Inspo':
              name = 'lightning-bolt';
              break;

            default:
              break;
          }

          return (
            <MaterialCommunityIcon
              name={name + (focused ? '' : name === 'hanger' ? '' : '-outline')}
              size={28}
              color={focused ? Colors.ROUGE : color}
            />
          );
        },
        tabBarLabel: ({focused, color}) => {
          return (
            <Text
              style={{
                color: focused ? Colors.ROUGE : color,
              }}>
              {route.name}
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Brands"
        component={BrandsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Feed"
        component={FeedStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Styles"
        component={StylesStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Inspo"
        component={InspoStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export type MainStackParamList = {
  MainStack: undefined;
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        key={'MainTabs'}
        name={'MainTabs'}
        component={MainTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
