import auth from '@react-native-firebase/auth';
import {Toast} from 'native-base';
import {useMutation} from 'react-query';

import {ResponseStatus, User_LoginQuery} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNIN} from '~/graphql/user/queries/user_login';
import {useStore} from '~/store';

const useSignin = () => {
  const setUserId = useStore(state => state.setUserId);

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

export default useSignin;
