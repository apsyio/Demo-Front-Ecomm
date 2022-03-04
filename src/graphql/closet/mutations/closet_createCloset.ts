import {gql} from 'graphql-request';

export const CREATE_CLOSET = gql`
  mutation closet_createCloset($input: ClosetInput) {
    closet_createCloset(input: $input) {
      result {
        userId
        user {
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
      }
      status
    }
  }
`;
