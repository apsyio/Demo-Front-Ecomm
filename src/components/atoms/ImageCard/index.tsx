import {Text, View} from 'native-base';
import React from 'react';
import {
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Colors} from '~/styles';

export default function ImageCard({
  bottomTitle,
  uri,
  children,
  onPress,
  hasBorder,
  containerStyle,
}: {
  bottomTitle?: string;
  uri: string;
  children?: any;
  onPress: () => void;
  hasBorder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{width: '50%'}, containerStyle]}>
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
        <View flex={1} justifyContent="flex-end">
          <Text fontSize={'sm'} mb={2} fontWeight={'bold'} color={Colors.WHITE}>
            {bottomTitle}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
