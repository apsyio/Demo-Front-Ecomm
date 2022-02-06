import {
  Avatar,
  Button,
  FlatList,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from '~/components/atoms';
import {Colors} from '~/styles';

export default function FeedsScreen() {
  return (
    <Container>
      <FlatList
        data={[
          {
            id: 1,
            fullname: 'Charlotte Oxnam',
            title: 'Your Size Does Not Dictate Your Dating Standards',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: false,
            createdAt: '2 days ago',
          },
          {
            id: 2,
            fullname: 'Feyi Odejimi',
            title: 'Being Plus-Sized on Social Media',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: true,
            createdAt: '2 days ago',
          },
          {
            id: 3,
            fullname: 'Feyi Odejimi',
            title: 'Your Size Does Not Dictate Your Dating Standards',
            desc: ' Now that I am a few months into college and have watched and experienced hook-up culture and dating culture in college I have noticed a consistent theme. There seems to be a common belief that as women.',
            uri: 'https://picsum.photos/200',
            isLiked: false,
            createdAt: '2 days ago',
          },
        ]}
        renderItem={({item}) => (
          <>
            <VStack p={5}>
              <HStack alignItems={'center'} justifyContent={'space-between'}>
                <HStack>
                  <Avatar
                    mr={2}
                    size={10}
                    source={{uri: 'https://picsum.photos/200'}}
                  />
                  <VStack>
                    <Text>{item.fullname}</Text>
                    <Text fontSize={'sm'} color={Colors.EMPRESS}>
                      {item.createdAt}
                    </Text>
                  </VStack>
                </HStack>
                <Button onPress={() => null} variant={'sub'}>
                  <Icon
                    as={MaterialCommunityIcons}
                    size="md"
                    name={'heart' + (item.isLiked ? '' : '-outline')}
                    color={item.isLiked ? Colors.RED : Colors.BLACK}
                  />
                </Button>
              </HStack>

              <Text my={2} fontSize={'xl'}>
                {item.title}
              </Text>

              <Text>{item.desc}</Text>
            </VStack>

            <Image width={'100%'} height={200} source={{uri: item.uri}} />
          </>
        )}
      />
    </Container>
  );
}
