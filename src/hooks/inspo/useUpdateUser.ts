import {useMutation, useQueryClient} from 'react-query';

import {
  ResponseStatus,
  User_UpdateUserMutation,
  User_UpdateUserMutationVariables,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {UPDATE_USER} from '~/graphql/user/mutations/user_updateUser';

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<
    User_UpdateUserMutation,
    any,
    User_UpdateUserMutationVariables
  >(
    async data => {
      return graphQLClient.request(UPDATE_USER, {input: data});
    },
    {
      onSuccess: data => {
        if (data.user_updateUser?.status === ResponseStatus.Success) {
          queryClient.invalidateQueries('inspos');
          queryClient.invalidateQueries('inspo');
        }
      },
    },
  );
};

export default useUpdateUser;
