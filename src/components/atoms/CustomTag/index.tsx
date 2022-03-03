import {Icon, Text, View} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import type {Maybe} from '~/generated/graphql';
import {Colors} from '~/styles';

export default memo(function Tag({
  top,
  left,
  name,
  onPress,
  onPressRemove,
}: {
  top: number;
  left: number;
  name: Maybe<string> | undefined;
  onPress: () => void;
  onPressRemove?: () => void;
}) {
  return (
    <View position={'absolute'} top={top} left={left}>
      <View height={0} width={0} left={15} />
      <TouchableOpacity onPress={onPress}>
        <View
          backgroundColor={Colors.BLACK_TRANSPARENT}
          borderRadius={5}
          paddingLeft={2}
          paddingRight={2}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text color={Colors.WHITE} bold>
            {name}
          </Text>

          {onPressRemove && (
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
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
});
