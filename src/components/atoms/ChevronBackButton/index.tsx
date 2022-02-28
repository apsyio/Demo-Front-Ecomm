import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {goBack} from '~/navigation/methods';
import {Colors, Spacing} from '~/styles';

export default function ChevronBackButton({
  color = Colors.BLACK,
  onPress,
  testID,
}: {
  color?: string;
  onPress?: () => void;
  testID?: string;
}) {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => (onPress ? onPress() : goBack())}>
      <MaterialCommunityIcon
        name="chevron-left"
        color={color}
        size={Spacing.largest}
      />
    </TouchableOpacity>
  );
}
