import {Text} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

import type {Maybe} from '~/generated/graphql';
import {Colors} from '~/styles';

import {ImageCard} from '..';

export default memo(function BrandCard({
  thumbnail,
  onPress,
  sizeOffered,
}: {
  thumbnail?: Maybe<string>;
  onPress: () => void;
  sizeOffered?: Maybe<string>;
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

      {sizeOffered && (
        <Text
          fontWeight={'bold'}
          numberOfLines={1}
          fontSize={'sm'}
          color={Colors.SEA_PINK}
          mt={3}
          mb={1}>
          {sizeOffered.replace(/-/g, '  ')}
        </Text>
      )}
    </TouchableOpacity>
  );
});
