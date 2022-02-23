import auth from '@react-native-firebase/auth';
import {HStack, Icon, ScrollView, Text, Toast, useDisclose} from 'native-base';
import React from 'react';
import {Share, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ConfirmActionSheet, CustomContainer} from '~/components/atoms';
import {ResponseStatus} from '~/generated/graphql';
import useDeactiveUser from '~/hooks/inspo/useDeactiveUser';
import {navigate} from '~/navigation/methods';
import {useStore} from '~/store';
import {Colors} from '~/styles';

export default function SettingsScreen() {
  const setIsUserLoggedIn = useStore(state => state.setIsUserLoggedIn);

  const {
    onClose: onCloseSignOutActionSheet,
    onOpen: onOpenSignOutActionSheet,
    isOpen: isOpenSignOutActionSheet,
  } = useDisclose();

  const {
    onClose: onCloseDeactiveAccountOutActionSheet,
    onOpen: onOpenDeactiveAccountOutActionSheet,
    isOpen: isOpenDeactiveAccountOutActionSheet,
  } = useDisclose();

  const {mutate} = useDeactiveUser();

  return (
    <CustomContainer>
      <ConfirmActionSheet
        onClose={onCloseSignOutActionSheet}
        isOpen={isOpenSignOutActionSheet}
        onPressYes={async () => {
          try {
            await auth().signOut();
          } catch (error) {
            setIsUserLoggedIn(false);
          }
        }}
        title="Are you sure you want to sign out?"
      />

      <ConfirmActionSheet
        onClose={onCloseDeactiveAccountOutActionSheet}
        isOpen={isOpenDeactiveAccountOutActionSheet}
        onPressYes={() => {
          mutate(undefined, {
            onSuccess: async data => {
              if (data.user_deactive?.status === ResponseStatus.Success) {
                Toast.show({
                  title: 'Success',
                  status: 'success',
                  description:
                    'Your account has been deactivated successfully!',
                });
                try {
                  await auth().signOut();
                } catch (error) {
                  setIsUserLoggedIn(false);
                }
              }
            },
          });
        }}
        title="Are you sure you want to de-activate your account?"
      />
      <ScrollView>
        {[
          {
            title: 'Share App',
            iconName: 'share',
            onPress: async () => {
              await Share.share({
                message: `Please download Cue The Curves from Google Play Store:
https://play.google.com/store/apps/details?id=io.apsy.cuethecurves
Or download Cue The Curves from App Store:
https://play.google.com/store/apps/details?id=io.apsy.cuethecurves`,
              });
            },
          },
          {
            title: 'Support',
            iconName: 'headset',
            onPress: () => navigate('Support'),
          },
          {
            title: 'FAQ',
            iconName: 'information-outline',
            onPress: () => navigate('FAQ'),
          },
          {
            title: 'Terms of service',
            iconName: 'file',
            onPress: () => navigate('TermsOfService'),
          },
          {
            title: 'Privacy policy',
            iconName: 'security',
            onPress: () => navigate('PrivacyPolicy'),
          },
          {
            title: 'Sign out',
            iconName: 'logout',
            onPress: onOpenSignOutActionSheet,
          },
          {
            title: 'Deactive account',
            iconName: 'account-remove',
            onPress: onOpenDeactiveAccountOutActionSheet,
          },
        ].map(({title, iconName, onPress}) => (
          <TouchableOpacity key={title} onPress={onPress}>
            <HStack
              justifyContent={'space-between'}
              mt={5}
              p={4}
              borderRadius={'xl'}
              borderWidth={1}
              borderColor={Colors.SHADY_LADY}>
              <HStack alignItems={'center'}>
                <Icon
                  as={MaterialCommunityIcons}
                  size="md"
                  name={iconName}
                  color={Colors.BLACK}
                  mr={2}
                />
                <Text fontSize={'lg'}>{title}</Text>
              </HStack>

              <Icon
                as={MaterialCommunityIcons}
                size="md"
                name={'chevron-right'}
                color={Colors.BLACK}
              />
            </HStack>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </CustomContainer>
  );
}
