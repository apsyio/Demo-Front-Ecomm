import {gql} from 'graphql-request';

export const SUPPORT_USER = gql`
  mutation user_support($email: EmailInput) {
    user_support(email: $email) {
      status
    }
  }
`;
