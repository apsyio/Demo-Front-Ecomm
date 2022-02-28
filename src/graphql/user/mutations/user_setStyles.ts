import {gql} from 'graphql-request';

export const SET_STYLES = gql`
  mutation user_setStyles($styleIds: [Int!]) {
    user_setStyles(styleIds: $styleIds) {
      status
    }
  }
`;
