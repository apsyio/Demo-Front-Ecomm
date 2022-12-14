import {useMutation, useQueryClient} from 'react-query';

import type {
  Post_CreatePostMutation,
  Post_CreatePostMutationVariables,
} from '~/generated/graphql';
import {ResponseStatus} from '~/generated/graphql';
import graphQLClient from '~/graphql/graphQLClient';
import {CREATE_POST} from '~/graphql/post/mutations/post_createPost';

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation<
    Post_CreatePostMutation,
    any,
    Post_CreatePostMutationVariables
  >(
    async data => {
      return graphQLClient.request(CREATE_POST, {postInput: data});
    },
    {
      onSuccess: data => {
        const status = data.post_createPost?.status;
        if (status === ResponseStatus.Success) {
          queryClient.invalidateQueries('posts');
        }
      },
    },
  );
};

export default useCreatePost;
