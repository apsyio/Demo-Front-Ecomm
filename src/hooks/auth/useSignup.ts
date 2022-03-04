import {useMutation} from 'react-query';
import {useRecoilState} from 'recoil';

import type {User_SignUpMutation} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNUP} from '~/graphql/user/mutations/user_signUp';
import {userIdState} from '~/store';

const useSignup = () => {
  const [_, setUserId] = useRecoilState(userIdState);
  return useMutation<User_SignUpMutation>(
    async _data => {
      return graphQLClient.request(SIGNUP);
    },
    {
      onSuccess: data => {
        const status = data.user_signUp?.status;
        if (status === ResponseStatus.Success) {
          setUserId(data.user_signUp?.result?.id);
        }
      },
    },
  );
};
export default useSignup;
