import {Avatar, HStack, Icon, Text, View} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';

export default function StyleOrBrandCard({
  uri,
  title,
  likesCount,
}: {
  uri: string;
  title: string;
  likesCount: number;
}) {
  return (
    <HStack mb={5}>
      <Avatar mr={2} size={'lg'} source={{uri}} />

      <View justifyContent={'space-around'}>
        <Text fontSize={'xl'}>{title}</Text>
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
