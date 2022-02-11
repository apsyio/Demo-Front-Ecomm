import {gql} from 'graphql-request';

export const GET_BRANDS = gql`
  query brand_getBrands(
    $skip: Int
    $take: Int
    $where: BrandsFilterInput
    $order: [BrandsSortInput!]
    $brandIds: [Int!]
  ) {
    brand_getBrands(brandIds: $brandIds) {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
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
