import {FlatList} from 'native-base';
import React from 'react';
import {FlatListProps} from 'react-native';

export default function CustomFlatList(props: FlatListProps<any>) {
  return <FlatList onEndReachedThreshold={0.9} {...props} />;
}
