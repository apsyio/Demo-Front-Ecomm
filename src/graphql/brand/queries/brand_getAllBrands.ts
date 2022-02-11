import {gql} from 'graphql-request';

export const GET_ALL_BRANDS = gql`
  query brand_getAllBrands(
    $skip: Int
    $take: Int
    $where: BrandDtoFilterInput
    $order: [BrandDtoSortInput!]
  ) {
    brand_getAllBrands {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          sizes
          id
          name
          thumbnail
          likesCount
          photos
          styles {
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
          inspos {
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
