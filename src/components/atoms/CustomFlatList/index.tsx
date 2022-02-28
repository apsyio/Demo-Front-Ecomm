import {FlatList} from 'native-base';
import {IFlatListProps} from 'native-base/lib/typescript/components/basic/FlatList';
import React from 'react';

export default function CustomFlatList(props: IFlatListProps<any>) {
  return <FlatList onEndReachedThreshold={0.9} {...props} />;
}
