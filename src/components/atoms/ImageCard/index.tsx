import {Text, View} from 'native-base';
import React, {memo} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {ImageBackground, TouchableOpacity} from 'react-native';

import type {Maybe} from '~/generated/graphql';
import {Colors} from '~/styles';
import {getImageUrl} from '~/utils/image';

export default memo(function ImageCard({
  testID,
  bottomTitle,
  uri,
  children,
  onPress,
  hasBorder,
  containerStyle,
  isSmall,
}: {
  testID?: string;
  bottomTitle?: string | null;
  uri: Maybe<string> | undefined;
  children?: any;
  onPress: () => void;
  hasBorder?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  isSmall?: boolean;
}) {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[
        {flex: 1, justifyContent: 'center', alignItems: 'center'},
        containerStyle,
      ]}>
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
        source={{uri: getImageUrl(uri)}}>
        {children}
        <View flex={1} justifyContent="flex-end">
          <Text fontSize={'sm'} mb={2} fontWeight={'bold'} color={Colors.WHITE}>
            {bottomTitle}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});
