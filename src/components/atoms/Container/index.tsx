import {View} from 'native-base';
import React from 'react';

import {Colors} from '~/styles';

export default function Container({...props}) {
  return (
    <View flex={1} background={Colors.WHITE} {...props}>
      {props.children}
    </View>
  );
}
