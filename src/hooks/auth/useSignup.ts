import {useMutation} from 'react-query';

import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNUP} from '~/graphql/user/mutations/user_signUp';
import {useStore} from '~/store';

const useSignup = () => {
  const setUserId = useStore(state => state.setUserId);
  return useMutation(
    async _data => {
      return graphQLClient.request(SIGNUP);
    },
    {
      onSuccess: data => {
        if (data.user_signUp?.status === ResponseStatus.Success) {
          setUserId(data.user_signUp?.result?.user?.id);
        }
      },
    },
  );
};

export default useSignup;
