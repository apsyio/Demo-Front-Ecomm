import {FlatList} from 'native-base';
import type {IFlatListProps} from 'native-base/lib/typescript/components/basic/FlatList';
import React, {memo} from 'react';

export default memo(function CustomFlatList(props: IFlatListProps<any>) {
  return <FlatList onEndReachedThreshold={0.9} {...props} />;
});
