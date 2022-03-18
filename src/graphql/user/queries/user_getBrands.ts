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
          styleBrands {
            styleId
            brandId
            id
            isDeleted
          }
          likesCount
          photos {
            key
            value
          }
          id
          isDeleted
          createdAt
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
