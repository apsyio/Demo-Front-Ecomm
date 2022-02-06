import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

import {Colors} from '~/styles';

export default function ImageCard({
  uri,
  children,
  onPress,
  hasBorder,
}: {
  uri: string;
  children?: any;
  onPress: () => void;
  hasBorder?: boolean;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{width: '50%'}}>
      <ImageBackground
        imageStyle={[
          {borderRadius: 20},
          hasBorder ? {borderWidth: 2, borderColor: Colors.GALLERY} : {},
        ]}
        style={{
          width: 150,
          height: 150,
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 20,
        }}
        source={{uri}}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
}
