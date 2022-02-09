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
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function ProfileScreen() {
  return (
    <CustomContainer>
      <ScrollView>
        <Center>
          <AvatarWithTitle
            title="Anna Howard"
            uri="https://picsum.photos/200"
          />

          <Button
            onPress={() => navigate('MyProfile')}
            variant={'outline'}
            rounded="md"
            borderColor={Colors.SEA_PINK}
            _text={{color: Colors.SEA_PINK}}>
            My Profile
          </Button>
        </Center>

        <Button mt={5} variant={'primary'} onPress={() => null}>
          Create a new closet
        </Button>

        {[
          {
            title: 'Information',
            onPressEdit: () => navigate('EditProfileInformation'),
            items: [
              {label: 'Full Name', value: 'Anna Howard'},
              {label: 'Email', value: 'Anna.Howard@gmail.com'},
              {
                label: 'Bio',
                value:
                  'Occaecat cillum commodo ad commodo esse proident sunt ex aute. Exercitation ea elit aliquip minim ad nulla aliquip Lorem enim quis duis consequat est. Cupidatat ullamco magna proident nulla cillum mollit magna cillum ad do. Lorem dolor tempor eiusmod velit id veniam cupidatat irure nisi.',
              },
              {label: 'Phone Number', value: '+13245675423'},
            ],
          },
          {
            title: 'Social Network',
            onPressEdit: () => navigate('EditProfileSocialNetworks'),
            items: [
              {label: 'Instagram', value: '@Anna.howard'},
              {label: 'TikTok', value: '@Anna.howard'},
              {label: 'Pinterest', value: '@Anna.howard'},
            ],
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
            {items.map(item => (
              <ProfileCard key={item.label} {...item} />
            ))}
          </View>
        ))}
      </ScrollView>
    </CustomContainer>
  );
}
