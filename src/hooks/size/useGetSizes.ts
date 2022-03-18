import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import type {Sizes, Sizes_GetSizesQuery} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_SIZES} from '~/graphql/size/queries/sizes_getSizes';

const useGetSizes = ({
  where,
  order,
  options = {},
}: {
  where?: any;
  order?: any;
  options?: any;
}) => {
  return useInfiniteQuery<Sizes_GetSizesQuery, any, Sizes, any>(
    [queryKeys.styles, where, order],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_SIZES, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
      });
    },
    {
      getNextPageParam: (
        lastPage: Sizes_GetSizesQuery,
        allPages: Sizes_GetSizesQuery[],
      ) => {
        if (lastPage?.sizes_getSizes?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages?.map(a => a.sizes_getSizes?.result?.items).flat(),
      }),
      ...options,
    },
  );
};

export default useGetSizes;
