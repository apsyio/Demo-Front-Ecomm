import {View} from 'native-base';
import React from 'react';

export default function Container({...props}) {
  return <View {...props}>{props.children}</View>;
}
