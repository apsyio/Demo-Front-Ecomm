import {Avatar, Center, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {getImageUrl} from '~/utils/image';

export default function AvatarWithTitle({
  title,
  uri,
  onPress,
}: {
  title?: string | null;
  uri?: string | null;
  onPress: () => void;
}) {
  return (
    <Center my={7}>
      <TouchableOpacity disabled={!onPress} onPress={onPress}>
        <Avatar size={'xl'} source={{uri: getImageUrl(uri)}} />
        <Text my={2} fontSize={'2xl'}>
          {title}
        </Text>
      </TouchableOpacity>
    </Center>
  );
}
