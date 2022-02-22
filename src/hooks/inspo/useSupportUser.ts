import {useMutation} from 'react-query';

import {
  User_SupportMutation,
  User_SupportMutationVariables,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SUPPORT_USER} from '~/graphql/user/mutations/user_support';

const useSupportUser = () => {
  return useMutation<User_SupportMutation, any, User_SupportMutationVariables>(
    async data => {
      return graphQLClient.request(SUPPORT_USER, {email: data});
    },
  );
};

export default useSupportUser;
