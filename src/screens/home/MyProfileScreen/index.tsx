import {useAtom} from 'jotai';
import {
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  AvatarWithTitle,
  CustomContainer,
  ImagePickerModal,
  ProfileCard,
} from '~/components/atoms';
import {AccountTypes} from '~/generated/graphql';
import useGetInspoByInspoId from '~/hooks/inspo/useGetInspo';
import useUpdateUser from '~/hooks/inspo/useUpdateUser';
import {navigate} from '~/navigation/methods';
import {userIdState} from '~/store';
import {Colors} from '~/styles';

export default function MyProfileScreen() {
  const [userId] = useAtom(userIdState);

  const {inspo} = useGetInspoByInspoId(userId);

  const {mutate} = useUpdateUser();

  const [visible, setVisible] = useState(false);
  const close = () => setVisible(false);
  const open = () => {
    setVisible(true);
  };

  return (
    <CustomContainer>
      <ImagePickerModal
        visible={visible}
        close={close}
        onChange={(uploadedFileName: string) => {
          if (uploadedFileName) {
            mutate({avatarUrl: uploadedFileName});
          }
        }}
      />
      <ScrollView>
        <Center>
          <AvatarWithTitle
            title={inspo?.fullName}
            uri={inspo?.avatarUrl}
            onPress={open}
          />

          <Button
            onPress={() => navigate('Profile', {id: userId})}
            variant={'outline'}
            rounded="md"
            borderColor={Colors.SEA_PINK}
            _text={{color: Colors.SEA_PINK}}>
            My Profile
          </Button>
        </Center>

        {inspo?.accountType === AccountTypes.Public && (
          <Button
            mt={5}
            variant={'primary'}
            onPress={() => navigate('CreateCloset')}>
            Create a new closet
          </Button>
        )}

        {[
          {
            title: 'Information',
            onPressEdit: () => navigate('EditProfileInformation'),
            items: [
              {label: 'Full Name', value: inspo?.fullName},
              {label: 'Email', value: inspo?.email},
              {
                label: 'Bio',
                value: inspo?.bio,
              },
              {label: 'Phone Number', value: inspo?.phone},
            ],
          },
          {
            title: 'Social Network',
            onPressEdit: () => navigate('EditProfileSocialNetworks'),
            items: inspo?.socials?.map(social => ({
              label: social?.socialNetworks
                .toLowerCase()
                .replace('_', ' ')
                .replace(/^./, str => str.toUpperCase()),
              value: social?.address,
            })),
          },
        ].map(({title, items, onPressEdit}) => (
          <View key={title}>
            <HStack mt={10} justifyContent={'space-between'}>
              <Text fontWeight={'bold'}>{title}</Text>

              <TouchableOpacity onPress={onPressEdit}>
                <HStack alignItems={'center'}>
                  <Icon
                    color={Colors.SEA_PINK}
                    as={<MaterialCommunityIcon name="square-edit-outline" />}
                    size={'sm'}
                  />
                  <Text color={Colors.SEA_PINK}>Edit</Text>
                </HStack>
              </TouchableOpacity>
            </HStack>
            {items?.map(item => (
              <ProfileCard key={item.label} {...item} />
            ))}
          </View>
        ))}
      </ScrollView>
    </CustomContainer>
  );
}
