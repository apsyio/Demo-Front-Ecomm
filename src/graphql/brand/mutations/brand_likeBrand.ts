import {gql} from 'graphql-request';

export const LIKE_BRAND = gql`
  mutation brand_likeBrand($brandId: Int!, $liked: Boolean!) {
    brand_likeBrand(brandId: $brandId, liked: $liked) {
      status
    }
  }
`;
