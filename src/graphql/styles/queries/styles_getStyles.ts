import {gql} from 'graphql-request';

export const GET_STYLES = gql`
  query styles_getStyles(
    $skip: Int
    $take: Int
    $where: StylesFilterInput
    $order: [StylesSortInput!]
  ) {
    styles_getStyles {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          name
          thumbnail
          colors
          photos
          likesCount
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
