import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import {Post_GetUserPostsQuery, PostDto} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_POSTS} from '~/graphql/post/queries/post_getUserPosts';

const useGetPosts = ({
  where,
  order,
  options = {},
}: {
  where?: any;
  order?: any;
  options?: any;
}) => {
  return useInfiniteQuery<Post_GetUserPostsQuery, any, PostDto, any>(
    [queryKeys.posts, where, order],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_POSTS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
      });
    },
    {
      getNextPageParam: (
        lastPage: Post_GetUserPostsQuery,
        allPages: Post_GetUserPostsQuery[],
      ) => {
        if (lastPage?.post_getUserPosts?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages?.map(a => a.post_getUserPosts?.result?.items).flat(),
      }),
      ...options,
    },
  );
};

export default useGetPosts;
