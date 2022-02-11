import {gql} from 'graphql-request';

export const GET_USER_INSPO_BY_INSPO_ID = gql`
  query user_getInspo($inspoId: Int!) {
    user_getInspo(inspoId: $inspoId) {
      result {
        fullName
        accountType
        email
        phone
        bio
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
            postLikes {
              userId
              postId
              liked
              id
              isDeleted
            }
            socials {
              socialNetworks
              address
              userId
              id
              isDeleted
            }
            closets {
              userId
              outfitName
              photo
              createdAt
              id
              isDeleted
            }
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
            userStyles {
              userId
              styleId
              id
              isDeleted
            }
            styleLikes {
              userId
              styleId
              liked
              id
              isDeleted
            }
            externalId
            id
            isDeleted
          }
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
            closet {
              userId
              outfitName
              photo
              createdAt
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
      }
      status
    }
  }
`;
