import {
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  AvatarWithTitle,
  CustomContainer,
  ProfileCard,
} from '~/components/atoms';
import {AccountTypes} from '~/generated/graphql';
import useGetInspoByInspoId from '~/hooks/inspo/useGetInspo';
import {navigate} from '~/navigation/methods';
import {useStore} from '~/store';
import {Colors} from '~/styles';

export default function MyProfileScreen() {
  const userId = useStore(state => state.userId);

  const {inspo} = useGetInspoByInspoId(userId);

  return (
    <CustomContainer>
      <ScrollView>
        <Center>
          <AvatarWithTitle title={inspo?.fullName} uri={inspo?.avatar} />

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
              label: social?.socialNetworks,
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
