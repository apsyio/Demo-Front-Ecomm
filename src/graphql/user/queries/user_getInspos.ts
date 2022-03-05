import {gql} from 'graphql-request';

export const GET_INSPOS = gql`
  query user_getInspos(
    $skip: Int
    $take: Int
    $where: UsersFilterInput
    $order: [UsersSortInput!]
    $isCommon: Boolean!
    $isRandom: Boolean!
  ) {
    user_getInspos(isCommon: $isCommon, isRandom: $isRandom) {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
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
