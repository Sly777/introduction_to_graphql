import { lambdaPlayground } from 'graphql-playground-middleware';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

export const handler = lambdaPlayground({
  endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT
    ? process.env.REACT_APP_GRAPHQL_ENDPOINT
    : '/production/graphql'
});
