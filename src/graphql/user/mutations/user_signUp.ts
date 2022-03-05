import {gql} from 'graphql-request';

export const SIGNUP = gql`
  mutation user_signUp {
    user_signUp {
      result {
        fullName
        accountType
        email
        phone
        avatarUrl
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
      status
    }
  }
`;
