import {gql} from 'graphql-request';

export const GET_BRAND_POSTS = gql`
  query post_getBrandPosts(
    $skip: Int
    $take: Int
    $where: PostDtoFilterInput
    $order: [PostDtoSortInput!]
    $brandId: Int!
  ) {
    post_getBrandPosts(brandId: $brandId) {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          title
          content
          photo
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
          likesCount
          id
          postedAt
          liked
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
