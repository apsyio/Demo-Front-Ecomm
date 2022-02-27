import {Icon, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Maybe} from '~/generated/graphql';
import {Colors} from '~/styles';

export default function Tag({
  top,
  left,
  name,
  onPressRemove,
  onPress,
}: {
  top: number;
  left: number;
  name: Maybe<string> | undefined;
  onPressRemove: () => void;
  onPress: () => void;
}) {
  return (
    <View
      style={{
        position: 'absolute',
        top,
        left,
      }}>
      <View height={0} width={0} left={15} />
      <View
        backgroundColor={Colors.BLACK_TRANSPARENT}
        borderRadius={5}
        paddingLeft={2}
        paddingRight={2}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <TouchableOpacity onPress={onPress}>
          <Text color={Colors.WHITE} bold>
            {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            paddingLeft: 5,
          }}
          onPress={onPressRemove}>
          <Icon
            size={5}
            color={Colors.RED}
            as={<MaterialCommunityIcon name={'close'} />}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
