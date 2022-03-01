import {View} from 'native-base';
import type {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import React from 'react';

import {Colors} from '~/styles';

export default function Container(
  props: IViewProps & React.RefAttributes<unknown>,
) {
  return (
    <View flex={1} p={5} bg={props.bg || Colors.WHITE} {...props}>
      {props.children}
    </View>
  );
}
