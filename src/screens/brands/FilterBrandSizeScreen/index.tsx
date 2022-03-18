import {Button, FlatList, Text} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {CustomCheckBox, CustomContainer} from '~/components/atoms';
import type {Maybe} from '~/generated/graphql';
import useGetSizes from '~/hooks/size/useGetSizes';
import {navigate} from '~/navigation/methods';
import {Colors} from '~/styles';

export default function FilterBrandSizeScreen({route}: any) {
  const sizesInParam = route.params?.sizes ?? [];
  const [sizes, setSizes] =
    useState<(Maybe<string> | undefined)[]>(sizesInParam);

  const {data, isRefetching, refetch, hasNextPage, fetchNextPage} = useGetSizes(
    {},
  );

  return (
    <CustomContainer flex={1}>
      <Text fontSize={'lg'}>Select Size:</Text>
      <FlatList
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: Colors.GALLERY,
              paddingVertical: 8,
            }}
            onPress={() => {
              if (sizes?.includes(item?.size)) {
                setSizes(prev => prev?.filter(a => a !== item.size));
              } else {
                setSizes(prev => [...prev, item.size]);
              }
            }}>
            <CustomCheckBox checked={sizes?.includes(item.size)} />
            <Text>{item.size}</Text>
          </TouchableOpacity>
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />

      <Button
        mt={5}
        variant={'primary'}
        onPress={() => navigate('Brands', {sizes})}>
        Filter
      </Button>
    </CustomContainer>
  );
}
