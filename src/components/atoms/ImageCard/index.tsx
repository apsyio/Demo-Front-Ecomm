import {Text, View} from 'native-base';
import React from 'react';
import {
  ImageBackground,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {noImageUrl} from '~/constants/image';
import {Colors} from '~/styles';

export default function ImageCard({
  bottomTitle,
  uri,
  children,
  onPress,
  hasBorder,
  containerStyle,
  isSmall,
}: {
  bottomTitle?: string;
  uri: string;
  children?: any;
  onPress: () => void;
  hasBorder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isSmall?: boolean;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[{flex: 1}, containerStyle]}>
      <ImageBackground
        imageStyle={[
          {borderRadius: 12},
          hasBorder ? {borderWidth: 2, borderColor: Colors.GALLERY} : {},
        ]}
        style={{
          width: isSmall ? 100 : 150,
          height: isSmall ? 100 : 150,
          alignItems: 'center',
          // justifyContent: 'space-between',
          borderRadius: 12,
        }}
        source={{uri: uri ?? noImageUrl}}>
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
