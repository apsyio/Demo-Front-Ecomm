import {gql} from 'graphql-request';

export const CREATE_POST = gql`
  mutation post_createPost($postInput: PostInput) {
    post_createPost(postInput: $postInput) {
      result {
        title
        content
        photo
        brandId
        brand {
          name
          thumbnail
          sizeOffered
          likesCount
          photos {
            key
            value
          }
          id
          isDeleted
          createdAt
        }
        styleId
        style {
          name
          thumbnail
          photos {
            key
            value
          }
          likesCount
          id
          isDeleted
          createdAt
        }
        postType
        sizeOffered
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
          avatarUrl
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
      status
    }
  }
`;
