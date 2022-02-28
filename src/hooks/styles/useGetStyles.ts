import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import {Styles, Styles_GetStylesQuery} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_STYLES} from '~/graphql/styles/queries/styles_getStyles';

const useGetStyles = ({
  where,
  order,
  options = {},
}: {
  where?: any;
  order?: any;
  options?: any;
}) => {
  return useInfiniteQuery<Styles_GetStylesQuery, any, Styles, any>(
    [queryKeys.styles, where, order],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_STYLES, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
      });
    },
    {
      getNextPageParam: (
        lastPage: Styles_GetStylesQuery,
        allPages: Styles_GetStylesQuery[],
      ) => {
        if (lastPage?.styles_getStyles?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages?.map(a => a.styles_getStyles?.result?.items).flat(),
      }),
      ...options,
    },
  );
};

export default useGetStyles;
