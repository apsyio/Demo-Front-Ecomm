import {useMutation, useQueryClient} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import {
  ResponseStatus,
  Style_LikeStyleMutation,
  Style_LikeStyleMutationVariables,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {LIKE_STYLE} from '~/graphql/styles/mutations/style_likeStyle';

const useLikeStyle = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Style_LikeStyleMutation,
    any,
    Style_LikeStyleMutationVariables
  >(
    async ({styleId, liked}) => {
      return graphQLClient.request(LIKE_STYLE, {styleId, liked});
    },
    {
      onSuccess: data => {
        if (data?.style_likeStyle?.status === ResponseStatus.Success) {
          queryClient.invalidateQueries(queryKeys.style);
        }
      },
    },
  );
};

export default useLikeStyle;
