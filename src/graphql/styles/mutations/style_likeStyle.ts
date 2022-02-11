import {gql} from 'graphql-request';

export const LIKE_STYLE = gql`
  mutation style_likeStyle($styleId: Int!, $liked: Boolean!) {
    style_likeStyle(styleId: $styleId, liked: $liked) {
      status
    }
  }
`;
