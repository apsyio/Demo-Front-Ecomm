import {
  Avatar,
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, ProfileCard} from '~/components/atoms';
import {Colors} from '~/styles';

export default function ProfileScreen() {
  return (
    <Container p={5}>
      <ScrollView>
        <Center>
          <Avatar size={'xl'} source={{uri: 'https://picsum.photos/200'}} />
          <Text my={2} fontSize={'2xl'}>
            Anna Howard
          </Text>

          <Button
            onPress={() => null}
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
            items: [
              {label: 'Instagram', value: '@Anna.howard'},
              {label: 'TikTok', value: '@Anna.howard'},
              {label: 'Pinterest', value: '@Anna.howard'},
            ],
          },
        ].map(({title, items}) => (
          <>
            <HStack mt={10} justifyContent={'space-between'}>
              <Text fontWeight={'bold'}>{title}</Text>

              <TouchableOpacity onPress={() => null}>
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
          </>
        ))}
      </ScrollView>
    </Container>
  );
}
