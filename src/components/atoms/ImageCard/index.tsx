import React from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

export default function ImageCard({
  uri,
  children,
  onPress,
}: {
  uri: string;
  children?: any;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={{width: '50%', marginTop: 10}}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={{
          width: 150,
          height: 150,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        source={{uri}}>
        {children}
      </ImageBackground>
    </TouchableOpacity>
  );
}
