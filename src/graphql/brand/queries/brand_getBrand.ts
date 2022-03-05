import {gql} from 'graphql-request';

export const GET_BRAND_BY_ID = gql`
  query brand_getBrand($brandId: Int!) {
    brand_getBrand(brandId: $brandId) {
      result {
        id
        name
        thumbnail
        sizeOffered
        likesCount
        photos
        styles {
          name
          thumbnail
          colors
          photos
          likesCount
          id
          isDeleted
        }
        inspos {
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
        liked
      }
      status
    }
  }
`;
