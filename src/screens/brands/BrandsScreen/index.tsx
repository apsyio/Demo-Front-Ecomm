import {FlatList} from 'native-base';
import React from 'react';

import {CustomContainer} from '~/components/atoms';
import BrandCard from '~/components/atoms/BrandCard';
import useGetAllBrands from '~/hooks/brand/useGetBrands';
import {navigate} from '~/navigation/methods';

export default function BrandsScreen() {
  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetAllBrands({});

  return (
    <CustomContainer p={3}>
      <FlatList
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.name ? item?.name : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <BrandCard
            key={item.id}
            uri={item.thumbnail}
            sizes={item.sizes}
            onPress={() => navigate('BrandDetails', {id: item.id})}
          />
        )}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />
    </CustomContainer>
  );
}
