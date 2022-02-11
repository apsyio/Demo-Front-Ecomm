import {gql} from 'graphql-request';

export const LIKE_POST = gql`
  mutation post_likePost($postId: Int!, $liked: Boolean!) {
    post_likePost(postId: $postId, liked: $liked) {
      status
    }
  }
`;
