import {Avatar, Center, Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Colors} from '~/styles';
import {getImageUrl} from '~/utils/image';

export default function AvatarWithTitle({
  title,
  uri,
  onPress,
}: {
  title?: string | null;
  uri?: string | null;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Center my={7}>
        <Avatar
          size={'xl'}
          source={{uri: getImageUrl(uri)}}
          backgroundColor={Colors.TRANSPARENT}
          borderWidth={1}
          borderColor={Colors.SHADY_LADY}
        />
        <Text my={2} fontSize={'2xl'}>
          {title}
        </Text>
      </Center>
    </TouchableOpacity>
  );
}
