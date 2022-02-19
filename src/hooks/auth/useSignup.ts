import {Toast} from 'native-base';
import {useMutation} from 'react-query';

import {ResponseStatus, User_SignUpMutation} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNUP} from '~/graphql/user/mutations/user_signUp';
import {useStore} from '~/store';

const useSignup = () => {
  const setUserId = useStore(state => state.setUserId);
  return useMutation<User_SignUpMutation>(
    async _data => {
      return graphQLClient.request(SIGNUP);
    },
    {
      onSuccess: data => {
        const status = data.user_signUp?.status;
        if (status === ResponseStatus.Success) {
          setUserId(data.user_signUp?.result?.id);
        } else {
          Toast.show({
            title: 'Error',
            status: 'error',
            description: status,
          });
        }
      },
    },
  );
};

export default useSignup;
