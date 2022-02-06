import {Text} from 'native-base';
import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

import {Colors} from '~/styles';

export default function ImageCard({
  title,
  uri,
  onPress,
}: {
  title?: string;
  uri: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{width: '50%', marginTop: 10}}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={{
          width: 150,
          height: 150,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
        source={{uri}}>
        <Text mb={2} fontWeight={'bold'} color={Colors.WHITE}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
