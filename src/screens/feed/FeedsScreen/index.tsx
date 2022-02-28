import {FlatList} from 'native-base';
import React from 'react';

import {CustomContainer, PostOrFeedCard} from '~/components/atoms';
import useGetPosts from '~/hooks/post/useGetUserPosts';

export default function FeedsScreen() {
  const {isRefetching, data, fetchNextPage, hasNextPage, refetch} = useGetPosts(
    {},
  );

  return (
    <CustomContainer p={0}>
      <FlatList
        refreshing={isRefetching}
        onRefresh={refetch}
        keyExtractor={(item, index) =>
          item?.id ? item?.id?.toString() : index?.toString()
        }
        data={data?.pages}
        renderItem={({item}) => <PostOrFeedCard {...item} />}
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
      />
    </CustomContainer>
  );
}
