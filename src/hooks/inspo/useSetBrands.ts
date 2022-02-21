import {useMutation, useQueryClient} from 'react-query';

import {
  ResponseStatus,
  User_SetBrandsMutation,
  User_SetBrandsMutationVariables,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SET_BRANDS} from '~/graphql/user/mutations/user_setBrands';

const useSetBrands = () => {
  const queryClient = useQueryClient();
  return useMutation<
    User_SetBrandsMutation,
    any,
    User_SetBrandsMutationVariables
  >(
    async brandIds => {
      return graphQLClient.request(SET_BRANDS, {brandIds});
    },
    {
      onSuccess: data => {
        const status = data?.user_setBrands?.status;
        if (status === ResponseStatus.Success) {
          queryClient.invalidateQueries('inspo');
        }
      },
    },
  );
};

export default useSetBrands;
