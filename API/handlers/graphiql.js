import { graphiqlLambda } from 'apollo-server-lambda';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

export const handler = graphiqlLambda({
  endpointURL: process.env.REACT_APP_GRAPHQL_ENDPOINT
    ? process.env.REACT_APP_GRAPHQL_ENDPOINT
    : '/production/graphql'
});
