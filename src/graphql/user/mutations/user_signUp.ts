import {gql} from 'graphql-request';

export const SIGNUP = gql`
  mutation user_signUp {
    user_signUp {
      result {
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
          postId
          post {
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
              styleId
              postType
              sizeTag
              posterId
              postedAt
              id
              isDeleted
            }
            styleBrands {
              styleId
              brandId
              id
              isDeleted
            }
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
            styleBrands {
              styleId
              brandId
              id
              isDeleted
            }
            posts {
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
      status
    }
  }
`;
