import {Icon} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '~/styles';

export default memo(function FilterButton({
  onOpen,
  ...otherProps
}: {
  onOpen: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onOpen}
      style={{
        position: 'absolute',
        right: 20,
        bottom: 80,
        backgroundColor: Colors.ROUGE,
        padding: 10,
        borderRadius: 50,
      }}
      {...otherProps}>
      <Icon as={MaterialCommunityIcon} name="filter" color={Colors.WHITE} />
    </TouchableOpacity>
  );
});
