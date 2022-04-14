import {Avatar, HStack, Icon, Text, View} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import type {BrandDto, StyleDto} from '~/generated/graphql';
import {Colors} from '~/styles';
import {getImageUrl} from '~/utils/image';

export default memo(function StyleOrBrandCard({
  liked,
  thumbnail,
  name,
  likesCount = 0,
  onPressLike,
}: (StyleDto | BrandDto) & {onPressLike: () => void}) {
  return (
    <HStack mb={5}>
      <Avatar mr={2} size={'lg'} source={{uri: getImageUrl(thumbnail)}} />

      <View justifyContent={'space-around'}>
        <Text fontSize={'xl'}>{name}</Text>

        <TouchableOpacity onPress={onPressLike}>
          <HStack alignItems={'center'}>
            <Icon
              size={'sm'}
              as={MaterialCommunityIcons}
              name={liked ? 'heart' : 'heart-outline'}
              color={Colors.RED}
            />
            <Text color={Colors.RED}>{likesCount}</Text>
          </HStack>
        </TouchableOpacity>
      </View>
    </HStack>
  );
});
