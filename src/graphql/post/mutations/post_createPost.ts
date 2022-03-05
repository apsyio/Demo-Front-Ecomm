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
