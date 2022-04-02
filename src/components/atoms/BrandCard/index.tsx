import {Text} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import type {Brands} from '~/generated/graphql';
import {Colors} from '~/styles';

import {ImageCard} from '..';

export default memo(function BrandCard({
  name,
  thumbnail,
  brandSizes,
  onPress,
}: Brands & {
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.GALLERY,
        borderRadius: 10,
        marginRight: 12,
      }}
      onPress={() => null}>
      <ImageCard
        containerStyle={{
          flex: undefined,
        }}
        hasBorder
        onPress={onPress}
        uri={thumbnail}
      />
      <Text mt={3}>{name}</Text>
      {brandSizes && (
        <Text
          fontWeight={'bold'}
          numberOfLines={1}
          fontSize={'sm'}
          color={Colors.SEA_PINK}
          my={1}>
          {brandSizes.join('  ')}
        </Text>
      )}
    </TouchableOpacity>
  );
});
