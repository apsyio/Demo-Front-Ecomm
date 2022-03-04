import auth from '@react-native-firebase/auth';
import {useMutation} from 'react-query';
import {useRecoilState} from 'recoil';

import type {User_LoginQuery} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNIN} from '~/graphql/user/queries/user_login';
import {userIdState} from '~/store';

const useSignin = () => {
  const [_, setUserId] = useRecoilState(userIdState);

  return useMutation<User_LoginQuery>(
    async _data => {
      const idToken = await auth().currentUser?.getIdToken();
      if (idToken) {
        graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
      }

      return graphQLClient.request(SIGNIN);
    },
    {
      onSuccess: data => {
        const status = data.user_login?.status;
        if (status === ResponseStatus.Success) {
          setUserId(data.user_login?.result?.id);
        }
      },
    },
  );
};

export default useSignin;
