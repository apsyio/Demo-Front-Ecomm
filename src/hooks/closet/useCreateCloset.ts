import {useMutation, useQueryClient} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import type {
  Closet_CreateClosetMutation,
  Closet_CreateClosetMutationVariables,
} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import {CREATE_CLOSET} from '~/graphql/closet/mutations/closet_createCloset';
import graphQLClient from '~/graphql/graphQLClient';

const useCreateCloset = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Closet_CreateClosetMutation,
    any,
    Closet_CreateClosetMutationVariables
  >(
    async data => {
      return graphQLClient.request(CREATE_CLOSET, {input: data});
    },
    {
      onSuccess: data => {
        const status = data?.closet_createCloset?.status;
        if (status === ResponseStatus.Success) {
          queryClient.invalidateQueries(queryKeys.inspo);
        }
      },
    },
  );
};

export default useCreateCloset;
