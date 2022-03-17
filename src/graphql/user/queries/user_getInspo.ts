import {gql} from 'graphql-request';

export const GET_INSPO_BY_INSPO_ID = gql`
  query user_getInspo($inspoId: Int!) {
    user_getInspo(inspoId: $inspoId) {
      result {
        avatarUrl
        fullName
        accountType
        email
        phone
        bio
        socials {
          socialNetworks
          address
          userId
          id
          isDeleted
        }
        brands {
          brandSizes {
            id
            brandId
            sizeId
            size {
              id
              size
            }
            isDeleted
          }
          name
          thumbnail
          likesCount
          photos {
            key
            value
          }
          id
          isDeleted
          createdAt
        }
        closets {
          userId
          outfitName
          photo
          createdAt
          closetItems {
            closetId
            name
            url
            xCoordinate
            yCoordinate
            id
            isDeleted
          }
          id
          isDeleted
          createdAt
        }
      }
      status
    }
  }
`;
