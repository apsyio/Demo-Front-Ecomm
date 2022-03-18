import {gql} from 'graphql-request';

export const GET_SIZES = gql`
  query sizes_getSizes(
    $skip: Int
    $take: Int
    $where: SizesFilterInput
    $order: [SizesSortInput!]
  ) {
    sizes_getSizes {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          size
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
