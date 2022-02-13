import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import {Post_GetBrandPostsQuery, PostDto} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_BRAND_POSTS} from '~/graphql/post/queries/post_getBrandPosts';

const useGetBrandPosts = ({
  where,
  order,
  brandId,
  options = {},
}: {
  where?: any;
  order?: any;
  brandId: number;
  options?: any;
}) => {
  return useInfiniteQuery<Post_GetBrandPostsQuery, any, PostDto, any>(
    [queryKeys.posts, where, order, brandId],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_BRAND_POSTS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
        brandId,
      });
    },
    {
      getNextPageParam: (
        lastPage: Post_GetBrandPostsQuery,
        allPages: Post_GetBrandPostsQuery[],
      ) => {
        if (lastPage?.post_getBrandPosts?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages
          ?.map(a => a.post_getBrandPosts?.result?.items)
          .flat(),
      }),
      enabled: !!brandId,
      ...options,
    },
  );
};

export default useGetBrandPosts;
