import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ChevronBackButton} from '~/components/atoms';
import type {ClosetItems, Closets} from '~/generated/graphql';
import {
  BrandDetailsScreen,
  BrandsScreen,
  FilterBrandSizeScreen,
  PostsScreen,
  WriteReviewOrPostScreen,
} from '~/screens/brands';
import {
  CreateClosetScreen,
  EditProfileInformationScreen,
  EditProfileSocialNetworksScreen,
  FAQScreen,
  HomeScreen,
  MyProfileScreen,
  PrivacyPolicyScreen,
  ProfileScreen,
  SelectItemForTagScreen,
  SettingsScreen,
  SupportScreen,
  TagClothesScreen,
  TermsOfServiceScreen,
} from '~/screens/home';
import {OutfitScreen} from '~/screens/inspo';
import {Colors} from '~/styles';

import {navigate} from './methods';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  Home: undefined;
  Profile: {id: number};
  MyProfile: undefined;
  CreateCloset: {
    outfitName: string;
    photo: string;
    closetItems?: Partial<ClosetItems>[];
  };
  TagClothes: {
    outfitName: string;
    photo: string;
    closetItems: ClosetItems[];
    xCoordinate: number;
    yCoordinate: number;
  };
  SelectItemForTag: {
    outfitName: string;
    photo: string;
    closetItems?: Partial<ClosetItems>[];
  };
  Settings: undefined;
  Support: undefined;
  FAQ: undefined;
  PrivacyPolicy: undefined;
  TermsOfService: undefined;
  EditProfileInformation: undefined;
  EditProfileSocialNetworks: undefined;
  Outfit: {outfit: Closets | undefined};
  Brands: undefined;
  BrandDetails: {id: number};
  Posts: {brandId?: number; styleId?: number};
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
      headerRight: () => (
        <TouchableOpacity onPress={() => navigate('Settings')}>
          <Icon as={<MaterialCommunityIcon name="cog" />} />
        </TouchableOpacity>
      ),
    },
    name: 'MyProfile',
    component: MyProfileScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Create Closet',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'CreateCloset',
    component: CreateClosetScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Tag Clothes',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'SelectItemForTag',
    component: SelectItemForTagScreen,
  },

  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Tag Clothes',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'TagClothes',
    component: TagClothesScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Edit profile',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'EditProfileInformation',
    component: EditProfileInformationScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Edit profile',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'EditProfileSocialNetworks',
    component: EditProfileSocialNetworksScreen,
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
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'FAQ',
    component: FAQScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Privacy Policy',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'PrivacyPolicy',
    component: PrivacyPolicyScreen,
  },
  {
    options: {
      headerStyle: {
        backgroundColor: Colors.CHABLIS,
      },
      title: 'Terms Of Service',
      headerLeft: () => <ChevronBackButton />,
    },
    name: 'TermsOfService',
    component: TermsOfServiceScreen,
  },
  {
    options: ({route}: {route: any}) => {
      const {outfitName} = route.params.outfit;

      return {
        headerStyle: {
          backgroundColor: Colors.CHABLIS,
        },
        headerLeft: () => <ChevronBackButton />,
        title: outfitName,
      };
    },
    name: 'Outfit',
    component: OutfitScreen,
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
