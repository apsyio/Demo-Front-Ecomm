import {gql} from 'graphql-request';

export const GET_STYLE_BY_STYLE_ID = gql`
  query styles_getStyle($styleId: Int!) {
    styles_getStyle(styleId: $styleId) {
      result {
        name
        thumbnail
        photos {
          key
          value
        }
        likesCount
        liked
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
        brands {
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
      }
      status
    }
  }
`;
