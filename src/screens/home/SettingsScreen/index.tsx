import auth from '@react-native-firebase/auth';
import {HStack, Icon, ScrollView, Text, useDisclose} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ConfirmActionSheet, CustomContainer} from '~/components/atoms';
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
          navigate('AuthStack');
        }}
        title="Are you sure you want to de-activate your account?"
      />
      <ScrollView>
        {[
          {
            title: 'Share App',
            iconName: 'share',
            onPress: () => navigate('ShareApp'),
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
