import {GraphQLClient} from 'graphql-request';

const graphQLClient = new GraphQLClient(
  'https://aps-cueoncurves-dev.azurewebsites.net/graphql/',
);

export default graphQLClient;
