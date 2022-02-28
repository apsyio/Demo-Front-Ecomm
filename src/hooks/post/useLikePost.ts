import {useMutation, useQueryClient} from 'react-query';

import queryKeys from '~/constants/queryKeys';
import {
  Post_LikePostMutation,
  Post_LikePostMutationVariables,
  ResponseStatus,
} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {LIKE_POST} from '~/graphql/post/mutations/post_likePost';

const useLikePost = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Post_LikePostMutation,
    any,
    Post_LikePostMutationVariables
  >(
    async ({postId, liked}) => {
      return graphQLClient.request(LIKE_POST, {postId, liked});
    },
    {
      onSuccess: data => {
        const status = data?.post_likePost?.status;
        if (status === ResponseStatus.Success) {
          queryClient.invalidateQueries(queryKeys.posts);
        }
      },
    },
  );
};

export default useLikePost;
