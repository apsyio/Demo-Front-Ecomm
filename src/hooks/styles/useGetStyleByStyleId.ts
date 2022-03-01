import {useQuery} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import type {Styles_GetStyleQuery} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {GET_STYLE_BY_STYLE_ID} from '~/graphql/styles/queries/styles_getStyle';

const useGetStyleByStyleId = (styleId: number | undefined) => {
  const res = useQuery<Styles_GetStyleQuery>(
    [queryKeys.style, styleId],
    async () => {
      return graphQLClient.request(GET_STYLE_BY_STYLE_ID, {styleId});
    },
    {enabled: !!styleId},
  );

  return {...res, styleDetails: res?.data?.styles_getStyle?.result};
};
export default useGetStyleByStyleId;
