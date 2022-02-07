import {Avatar, Button, HStack, Icon, Image, Text, VStack} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';

export default function PostOrFeedCard({
  fullname,
  title,
  desc,
  uri,
  isLiked,
  createdAt,
}: {
  fullname: string;
  title: string;
  desc: string;
  uri: string;
  isLiked: boolean;
  createdAt: string;
}) {
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
              <Text>{fullname}</Text>
              <Text fontSize={'sm'} color={Colors.EMPRESS}>
                {createdAt}
              </Text>
            </VStack>
          </HStack>
          <Button onPress={() => null} variant={'sub'}>
            <Icon
              as={MaterialCommunityIcons}
              size="md"
              name={'heart' + (isLiked ? '' : '-outline')}
              color={isLiked ? Colors.RED : Colors.BLACK}
            />
          </Button>
        </HStack>

        <Text my={2} fontSize={'xl'}>
          {title}
        </Text>

        <Text>{desc}</Text>
      </VStack>

      <Image width={'100%'} height={200} source={{uri}} />
    </>
  );
}
