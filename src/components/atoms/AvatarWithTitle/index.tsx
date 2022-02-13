import {Avatar, Center, Text} from 'native-base';
import React from 'react';

import {noImageUrl} from '~/constants/image';

export default function AvatarWithTitle({
  title,
  uri,
}: {
  title: string;
  uri: string;
}) {
  return (
    <Center my={7}>
      <Avatar size={'xl'} source={{uri: uri ?? noImageUrl}} />
      <Text my={2} fontSize={'2xl'}>
        {title}
      </Text>
    </Center>
  );
}
