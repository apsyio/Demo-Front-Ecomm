import {gql} from 'graphql-request';

export const GET_STYLE_BY_STYLE_ID = gql`
  query styles_getStyle($styleId: Int!) {
    styles_getStyle(styleId: $styleId) {
      result {
        name
        thumbnail
        colors
        photos
        likesCount
        liked
        inspos {
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
        brands {
          sizes
          name
          thumbnail
          likesCount
          photos
          userBrands {
            userId
            brandId
            id
            isDeleted
          }
          brandLikes {
            userId
            brandId
            liked
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
          id
          isDeleted
        }
      }
      status
    }
  }
`;
