import auth from '@react-native-firebase/auth';
import {useMutation} from 'react-query';

import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {SIGNIN} from '~/graphql/user/queries/user_login';
import {useStore} from '~/store';

const useSignin = () => {
  const setUserId = useStore(state => state.setUserId);

  return useMutation(
    async _data => {
      const idToken = await auth().currentUser?.getIdToken();
      if (idToken) {
        graphQLClient.setHeader('authorization', 'Bearer ' + idToken);
      }

      return graphQLClient.request(SIGNIN);
    },
    {
      onSuccess: data => {
        if (data.user_signIn?.status === ResponseStatus.Success) {
          setUserId(data.user_signIn?.result?.user?.id);
        }
      },
    },
  );
};

export default useSignin;
