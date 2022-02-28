import {gql} from 'graphql-request';

export const DEACTIVE_USER = gql`
  mutation user_deactive {
    user_deactive {
      status
    }
  }
`;
