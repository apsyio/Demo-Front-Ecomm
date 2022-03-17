import {gql} from 'graphql-request';

export const GET_BRANDS = gql`
  query brand_getBrands(
    $skip: Int
    $take: Int
    $where: BrandsFilterInput
    $order: [BrandsSortInput!]
    $brandIds: [Int!]
  ) {
    brand_getBrands(brandIds: $brandIds) {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          name
          thumbnail
          brandSizes {
            id
            brandId
            sizeId
            size {
              id
              size
            }
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
