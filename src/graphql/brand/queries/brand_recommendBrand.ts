import {gql} from 'graphql-request';

export const GET_RECOMMENDED_BRAND = gql`
  query brand_recommendBrand {
    brand_recommendBrand {
      result {
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
          postType
          sizeTag
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
          posterId
          poster {
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
          postedAt
          likes {
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
      status
    }
  }
`;
