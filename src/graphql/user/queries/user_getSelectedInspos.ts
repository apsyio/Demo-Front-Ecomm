import {gql} from 'graphql-request';

export const GET_SELECTED_INSPOS = gql`
  query user_getSelectedInspos(
    $skip: Int
    $take: Int
    $where: UsersFilterInput
    $order: [UsersSortInput!]
  ) {
    user_getSelectedInspos {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          isActive
          fullName
          accountType
          email
          phone
          avatarUrl
          bio
          externalId
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
