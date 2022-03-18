import type {ICenterProps} from 'native-base';
import {Center, View} from 'native-base';
import React, {memo} from 'react';

import {Colors} from '~/styles';

export default memo(function CustomCheckBox({
  checked,
  ...otherProps
}: ICenterProps &
  React.RefAttributes<unknown> & {
    checked: boolean;
  }) {
  return (
    <Center
      bg={Colors.WHITE}
      borderRadius={7}
      width={6}
      height={6}
      m={2}
      borderWidth={1}
      borderColor={Colors.SEA_PINK}
      {...otherProps}>
      {checked && (
        <View bg={Colors.SEA_PINK} borderRadius={4} width={4} height={4} />
      )}
    </Center>
  );
});
