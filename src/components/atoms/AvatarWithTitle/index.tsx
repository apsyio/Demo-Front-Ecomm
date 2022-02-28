import {Avatar, Center, Text} from 'native-base';
import React from 'react';

export default function AvatarWithTitle({
  title,
  uri,
}: {
  title?: string | null;
  uri: string;
}) {
  return (
    <Center my={7}>
      <Avatar size={'xl'} source={{uri}} />
      <Text my={2} fontSize={'2xl'}>
        {title}
      </Text>
    </Center>
  );
}
