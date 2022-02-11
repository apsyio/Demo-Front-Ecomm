import {gql} from 'graphql-request';

export const GET_USER_STYLES = gql`
  query user_getStyles(
    $skip: Int
    $take: Int
    $where: StylesFilterInput
    $order: [StylesSortInput!]
  ) {
    user_getStyles {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          name
          thumbnail
          colors
          photos
          likesCount
          styleBrands {
            styleId
            style {
              name
              thumbnail
              colors
              photos
              likesCount
              id
              isDeleted
            }
            brandId
            brand {
              sizes
              name
              thumbnail
              likesCount
              photos
              id
              isDeleted
            }
            id
            isDeleted
          }
          posts {
            title
            content
            photo
            brandId
            brand {
              sizes
              name
              thumbnail
              likesCount
              photos
              id
              isDeleted
            }
            styleId
            style {
              name
              thumbnail
              colors
              photos
              likesCount
              id
              isDeleted
            }
            postType
            sizeTag
            postLikes {
              userId
              postId
              liked
              id
              isDeleted
            }
            posterId
            poster {
              fullName
              accountType
              email
              phone
              bio
              externalId
              id
              isDeleted
            }
            postedAt
            likes {
              userId
              postId
              liked
              id
              isDeleted
            }
            id
            isDeleted
          }
          userStyles {
            userId
            user {
              fullName
              accountType
              email
              phone
              bio
              externalId
              id
              isDeleted
            }
            styleId
            style {
              name
              thumbnail
              colors
              photos
              likesCount
              id
              isDeleted
            }
            id
            isDeleted
          }
          styleLikes {
            userId
            user {
              fullName
              accountType
              email
              phone
              bio
              externalId
              id
              isDeleted
            }
            styleId
            style {
              name
              thumbnail
              colors
              photos
              likesCount
              id
              isDeleted
            }
            liked
            id
            isDeleted
          }
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
