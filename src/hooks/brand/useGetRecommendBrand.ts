import {useQuery} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import type {Brand_RecommendBrandQuery} from '~/generated/graphql';
import {GET_RECOMMENDED_BRAND} from '~/graphql/brand/queries/brand_recommendBrand';
import graphQLClient from '~/graphql/graphQLClient';

const useGetRecommendBrand = ({options}: {options?: any}) => {
  const res = useQuery<Brand_RecommendBrandQuery>(
    [queryKeys.recommendBrand],
    async () => {
      return graphQLClient.request(GET_RECOMMENDED_BRAND);
    },
    {...options},
  );
  return {...res, recommendBrand: res.data?.brand_recommendBrand?.result};
};

export default useGetRecommendBrand;
