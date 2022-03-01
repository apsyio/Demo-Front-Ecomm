import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import type {Post_GetStylePostsQuery, PostDto} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_STYLE_POSTS} from '~/graphql/post/queries/post_getStylePosts';

const useGetStylePosts = ({
  where,
  order,
  styleId,
  options = {},
}: {
  where?: any;
  order?: any;
  styleId: number;
  options?: any;
}) => {
  return useInfiniteQuery<Post_GetStylePostsQuery, any, PostDto, any>(
    [queryKeys.posts, where, order, styleId],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_STYLE_POSTS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
        styleId,
      });
    },
    {
      getNextPageParam: (
        lastPage: Post_GetStylePostsQuery,
        allPages: Post_GetStylePostsQuery[],
      ) => {
        if (lastPage?.post_getStylePosts?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages
          ?.map(a => a.post_getStylePosts?.result?.items)
          .flat(),
      }),
      enabled: !!styleId,
      ...options,
    },
  );
};

export default useGetStylePosts;
