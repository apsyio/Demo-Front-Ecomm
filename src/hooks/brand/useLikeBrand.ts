import {useMutation, useQueryClient} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import {
  Brand_LikeBrandMutation,
  Brand_LikeBrandMutationVariables,
  ResponseStatus,
} from '~/generated/graphql';
import {LIKE_BRAND} from '~/graphql/brand/mutations/brand_likeBrand';
import graphQLClient from '~/graphql/graphQLClient';

const useLikeBrand = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Brand_LikeBrandMutation,
    any,
    Brand_LikeBrandMutationVariables
  >(
    async ({brandId, liked}) => {
      return graphQLClient.request(LIKE_BRAND, {brandId, liked});
    },
    {
      onSuccess: data => {
        const status = data?.brand_likeBrand?.status;
        if (status === ResponseStatus.Success) {
          queryClient.invalidateQueries(queryKeys.brand);
        }
      },
    },
  );
};

export default useLikeBrand;
