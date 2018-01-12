import db from '../libraries/db';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

export const handler = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: {
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    }
  };

  db
    .authenticate()
    .then(() => {
      response.body.message = 'Connection has been established successfully.';
      response.body = JSON.stringify(response.body);
      cb(null, response);
    })
    .catch(err => {
      response.body.message = `Unable to connect to the database: ${err}`;
      response.statusCode = 500;
      response.body = JSON.stringify(response.body);
      cb(null, response);
    });
};
