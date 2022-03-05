import {useQuery} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import type {Brand_GetBrandQuery} from '~/generated/graphql';
import {GET_BRAND_BY_ID} from '~/graphql/brand/queries/brand_getBrand';
import graphQLClient from '~/graphql/graphQLClient';

const useGetBrandByBrandId = (brandId: number | undefined) => {
  const res = useQuery<Brand_GetBrandQuery>(
    [queryKeys.brand, brandId],
    async () => {
      return graphQLClient.request(GET_BRAND_BY_ID, {brandId});
    },
    {enabled: !!brandId},
  );

  return {...res, brandDetails: res?.data?.brand_getBrand?.result};
};
export default useGetBrandByBrandId;
