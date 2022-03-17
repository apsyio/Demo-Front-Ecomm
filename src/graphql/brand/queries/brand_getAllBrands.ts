import {gql} from 'graphql-request';

export const GET_ALL_BRANDS = gql`
  query brand_getAllBrands(
    $skip: Int
    $take: Int
    $where: BrandDtoFilterInput
    $order: [BrandDtoSortInput!]
  ) {
    brand_getAllBrands {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          id
          name
          thumbnail
          sizes
          likesCount
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
