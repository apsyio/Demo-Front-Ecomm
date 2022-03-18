import {gql} from 'graphql-request';

export const GET_STYLE_POSTS = gql`
  query post_getStylePosts(
    $skip: Int
    $take: Int
    $where: PostDtoFilterInput
    $order: [PostDtoSortInput!]
    $styleId: Int!
  ) {
    post_getStylePosts(styleId: $styleId) {
      result(skip: $skip, take: $take, where: $where, order: $order) {
        items {
          title
          content
          photo
          postType
          style {
            id
            name
            thumbnail
            photos {
              key
              value
            }
            likesCount
            createdAt
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
