import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import type {User_GetSelectedInsposQuery, Users} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_SELECTED_INSPOS} from '~/graphql/user/queries/user_getSelectedInspos';

const useGetSelectedInspos = ({
  where,
  order,
  isCommon = false,
  isRandom = false,
  options = {},
}: {
  where?: any;
  order?: any;
  isCommon?: boolean;
  isRandom?: boolean;
  options?: any;
}) => {
  return useInfiniteQuery<User_GetSelectedInsposQuery, any, Users, any>(
    [queryKeys.selectedInspos, where, order, isCommon, isRandom],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_SELECTED_INSPOS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
      });
    },
    {
      getNextPageParam: (
        lastPage: User_GetSelectedInsposQuery,
        allPages: User_GetSelectedInsposQuery[],
      ) => {
        if (lastPage?.user_getSelectedInspos?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages
          ?.map(a => a.user_getSelectedInspos?.result?.items)
          .flat(),
      }),
      ...options,
    },
  );
};

export default useGetSelectedInspos;
