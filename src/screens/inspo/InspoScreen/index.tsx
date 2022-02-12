import {FlatList} from 'native-base';
import React from 'react';

import {CustomContainer, ImageCard} from '~/components/atoms';
import useGetInspos from '~/hooks/inspo/useGetInspos';
import {navigate} from '~/navigation/methods';

export default function InspoScreen() {
  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetInspos({});

  return (
    <CustomContainer>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <ImageCard
            containerStyle={{marginTop: 16}}
            hasBorder
            {...item}
            bottomTitle={item.fullName}
            onPress={() => navigate('MyProfile', {id: item.id})}
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
