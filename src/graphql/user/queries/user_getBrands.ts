import {gql} from 'graphql-request';

export const GET_USER_BRANDS = gql`
  query user_getBrands(
    $skip: Int
    $take: Int
    $where: BrandsFilterInput
    $order: [BrandsSortInput!]
  ) {
    user_getBrands {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          name
          thumbnail
          sizeOffered
          likesCount
          photos
          id
          isDeleted
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      status
    }
  }
`;
