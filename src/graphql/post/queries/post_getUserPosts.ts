import {gql} from 'graphql-request';

export const GET_POSTS = gql`
  query post_getUserPosts(
    $skip: Int
    $take: Int
    $where: PostDtoFilterInput
    $order: [PostDtoSortInput!]
  ) {
    post_getUserPosts {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          title
          content
          photo
          brand {
            sizeOffered
            name
            thumbnail
            likesCount
            photos
            id
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
