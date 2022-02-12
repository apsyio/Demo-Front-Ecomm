import {Avatar, HStack, Icon, Text, View} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {BrandDto, StyleDto} from '~/generated/graphql';
import {Colors} from '~/styles';

export default function StyleOrBrandCard({
  thumbnail,
  name,
  likesCount = 0,
}: StyleDto | BrandDto) {
  return (
    <HStack mb={5}>
      <Avatar mr={2} size={'lg'} source={{uri: thumbnail}} />

      <View justifyContent={'space-around'}>
        <Text fontSize={'xl'}>{name}</Text>
        <HStack alignItems={'center'}>
          <Icon
            size={'sm'}
            as={MaterialCommunityIcons}
            name="heart"
            color={Colors.RED}
          />
          <Text color={Colors.RED}>{likesCount}</Text>
        </HStack>
      </View>
    </HStack>
  );
}
