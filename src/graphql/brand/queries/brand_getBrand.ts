import {gql} from 'graphql-request';

export const GET_BRAND_BY_ID = gql`
  query brand_getBrand($brandId: Int!) {
    brand_getBrand(brandId: $brandId) {
      result {
        id
        name
        thumbnail
        sizes
        likesCount
        photos {
          key
          value
        }
        styles {
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
        createdAt
      }
      status
    }
  }
`;
