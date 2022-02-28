import {gql} from 'graphql-request';

export const SET_BRANDS = gql`
  mutation user_setBrands($brandIds: [Int!]) {
    user_setBrands(brandIds: $brandIds) {
      status
    }
  }
`;
