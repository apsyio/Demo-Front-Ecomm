import {FlatList, View} from 'native-base';
import React from 'react';

import {CustomContainer, ImageCard} from '~/components/atoms';
import useGetStyles from '~/hooks/styles/useGetStyles';
import {navigate} from '~/navigation/methods';

export default function StylesScreen() {
  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} =
    useGetStyles({});

  return (
    <CustomContainer>
      <FlatList
        numColumns={2}
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => (
          <View style={{width: '50%', marginTop: 10}}>
            <ImageCard
              {...item}
              uri={item.thumbnail}
              onPress={() => navigate('StyleDetails', {id: item.id})}
            />
          </View>
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
