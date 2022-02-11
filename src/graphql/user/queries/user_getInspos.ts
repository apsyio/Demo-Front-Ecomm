import {gql} from 'graphql-request';

export const GET_USER_INSPOS = gql`
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
          bio
          postLikes {
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
            postId
            post {
              title
              content
              photo
              brandId
              styleId
              postType
              sizeTag
              posterId
              postedAt
              id
              isDeleted
            }
            liked
            id
            isDeleted
          }
          socials {
            socialNetworks
            address
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
            id
            isDeleted
          }
          closets {
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
            outfitName
            photo
            createdAt
            closetItems {
              closetId
              name
              url
              xCoordinate
              yCoordinate
              id
              isDeleted
            }
            id
            isDeleted
          }
          userBrands {
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
          brandLikes {
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
            liked
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
