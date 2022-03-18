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
          size {
            id
            size
            isDeleted
          }
          postType
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
