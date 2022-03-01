import {useInfiniteQuery} from 'react-query';

import {PAGE_SIZE} from '~/constants/pagination';
import queryKeys from '~/constants/queryKeys';
import type {Brand_GetAllBrandsQuery, BrandDto} from '~/generated/graphql';
import {GET_ALL_BRANDS} from '~/graphql/brand/queries/brand_getAllBrands';
import graphQLClient from '~/graphql/graphQLClient';

const useGetAllBrands = ({
  where,
  order,
  options = {},
}: {
  where?: any;
  order?: any;
  options?: any;
}) => {
  return useInfiniteQuery<Brand_GetAllBrandsQuery, any, BrandDto, any>(
    [queryKeys.brands, where, order],
    async ({pageParam = 0}) => {
      return graphQLClient.request(GET_ALL_BRANDS, {
        skip: pageParam * PAGE_SIZE,
        take: PAGE_SIZE,
        where,
        order,
      });
    },
    {
      getNextPageParam: (
        lastPage: Brand_GetAllBrandsQuery,
        allPages: Brand_GetAllBrandsQuery[],
      ) => {
        if (lastPage?.brand_getAllBrands?.result?.pageInfo?.hasNextPage) {
          return allPages.length;
        }
        return undefined;
      },
      select: data => ({
        ...data,
        pages: data?.pages
          ?.map(a => a.brand_getAllBrands?.result?.items)
          .flat(),
      }),
      ...options,
    },
  );
};

export default useGetAllBrands;
