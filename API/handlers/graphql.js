import { graphqlLambda } from 'apollo-server-lambda';
import { schema } from '../functions/graphql';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

function callbackFilter(error, output, callback) {
  // eslint-disable-next-line no-param-reassign
  output.headers['Access-Control-Allow-Origin'] = '*';
  callback(error, output);
}

export const handler = (event, context, cb) => {
  const graphHandler = graphqlLambda({ schema });
  return graphHandler(event, context, (error, output) =>
    callbackFilter(error, output, cb)
  );
};
