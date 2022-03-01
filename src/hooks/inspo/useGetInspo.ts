import {useQuery} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import type {User_GetInspoQuery} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_INSPO_BY_INSPO_ID} from '~/graphql/user/queries/user_getInspo';

const useGetInspoByInspoId = (inspoId: number | undefined) => {
  const res = useQuery<User_GetInspoQuery>(
    [queryKeys.inspo, inspoId],
    async () => {
      return graphQLClient.request(GET_INSPO_BY_INSPO_ID, {inspoId});
    },
    {enabled: !!inspoId},
  );

  return {...res, inspo: res?.data?.user_getInspo?.result};
};
export default useGetInspoByInspoId;
