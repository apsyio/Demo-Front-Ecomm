import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import {User_GetInsposQuery, Users} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_INSPOS} from '~/graphql/user/queries/user_getInspos';

const useGetInspos = ({
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
  return useInfiniteQuery<User_GetInsposQuery, any, Users, any>(
    [queryKeys.brands, where, order, isCommon, isRandom],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_INSPOS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
        isCommon,
        isRandom,
      });
    },
    {
      getNextPageParam: (
        lastPage: User_GetInsposQuery,
        allPages: User_GetInsposQuery[],
      ) => {
        if (lastPage?.user_getInspos?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages?.map(a => a.user_getInspos?.result?.items).flat(),
      }),
      ...options,
    },
  );
};

export default useGetInspos;
