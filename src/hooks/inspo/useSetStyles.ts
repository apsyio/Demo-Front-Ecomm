import {useMutation, useQueryClient} from 'react-query';

import {
  ResponseStatus,
  User_SetStylesMutation,
  User_SetStylesMutationVariables,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SET_STYLES} from '~/graphql/user/mutations/user_setStyles';

const useSetStyles = () => {
  const queryClient = useQueryClient();
  return useMutation<
    User_SetStylesMutation,
    any,
    User_SetStylesMutationVariables
  >(
    async styleIds => {
      return graphQLClient.request(SET_STYLES, {styleIds});
    },
    {
      onSuccess: data => {
        if (data?.user_setStyles?.status === ResponseStatus.Success) {
          queryClient.invalidateQueries('inspo');
        }
      },
    },
  );
};

export default useSetStyles;
