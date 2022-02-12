import {Avatar, Button, HStack, Icon, Image, Text, VStack} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {PostDto} from '~/generated/graphql';
import {Colors} from '~/styles';

export default function PostOrFeedCard({
  poster,
  title,
  content,
  photo,
  liked,
  postedAt,
}: PostDto) {
  return (
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
              <Text>{poster?.fullName}</Text>
              <Text fontSize={'sm'} color={Colors.EMPRESS}>
                {postedAt}
              </Text>
            </VStack>
          </HStack>
          <Button onPress={() => null} variant={'sub'}>
            <Icon
              as={MaterialCommunityIcons}
              size="md"
              name={'heart' + (liked ? '' : '-outline')}
              color={liked ? Colors.RED : Colors.BLACK}
            />
          </Button>
        </HStack>

        <Text my={2} fontSize={'xl'}>
          {title}
        </Text>

        <Text>{content}</Text>
      </VStack>

      <Image width={'100%'} height={200} source={{uri: photo}} />
    </>
  );
}
