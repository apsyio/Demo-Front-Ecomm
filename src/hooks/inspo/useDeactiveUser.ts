import {useMutation} from 'react-query';

import type {User_DeactiveMutation} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {DEACTIVE_USER} from '~/graphql/user/mutations/user_deactive';

const useDeactiveUser = () => {
  return useMutation<User_DeactiveMutation, any>(async () => {
    return graphQLClient.request(DEACTIVE_USER);
  });
};

export default useDeactiveUser;
