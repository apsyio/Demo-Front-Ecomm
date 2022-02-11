import {gql} from 'graphql-request';

export const CREATE_CLOSET = gql`
  mutation closet_createCloset($input: ClosetInput) {
    closet_createCloset(input: $input) {
      result {
        userId
        user {
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
        outfitName
        photo
        createdAt
        closetItems {
          closetId
          closet {
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
      status
    }
  }
`;
