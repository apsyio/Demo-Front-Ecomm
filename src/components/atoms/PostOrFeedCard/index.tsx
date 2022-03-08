import dayjs from 'dayjs';
import {Avatar, Button, HStack, Icon, Image, Text, VStack} from 'native-base';
import React, {memo} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {noImageUrl} from '~/constants/image';
import type {PostDto} from '~/generated/graphql';
import useLikePost from '~/hooks/post/useLikePost';
import {Colors} from '~/styles';

export default memo(function PostOrFeedCard({
  id,
  poster,
  title,
  content,
  photo,
  liked,
  postedAt,
}: PostDto) {
  const {mutate} = useLikePost();

  return (
    <>
      <VStack p={5}>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <HStack>
            <Avatar mr={2} size={10} source={{uri: photo ?? noImageUrl}} />
            <VStack>
              <Text>{poster?.fullName}</Text>
              <Text fontSize={'sm'} color={Colors.EMPRESS}>
                {dayjs(postedAt).format('MMM DD')}{' '}
              </Text>
            </VStack>
          </HStack>
          <Button
            onPress={() => {
              mutate({postId: id, liked: !liked});
            }}
            variant={'sub'}>
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
});
