import {Text} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Colors} from '~/styles';

import {ImageCard} from '..';

export default function BrandCard({
  uri,
  onPress,
  tags,
}: {
  uri: string;
  onPress: () => void;
  tags?: string[];
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
        uri={uri}
      />

      {tags && (
        <Text
          fontWeight={'bold'}
          numberOfLines={1}
          fontSize={'sm'}
          color={Colors.SEA_PINK}
          mt={3}
          mb={1}>
          {tags.join('   ')}
        </Text>
      )}
    </TouchableOpacity>
  );
}
