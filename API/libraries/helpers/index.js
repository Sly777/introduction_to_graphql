/**
 * Return unauthorized response (and call callback)
 *
 * @export
 * @param {function} cb
 * @returns
 */
export function returnUnauthorized(cb) {
  return cb(null, {
    statusCode: 401,
    body: JSON.stringify({
      message: 'Unauthorized! Please use valid token'
    })
  });
}

/**
 * Return bad request
 *
 * @export
 * @param {function} cb
 * @returns
 */
export function BadRequest(cb) {
  return cb(null, {
    statusCode: 400,
    body: JSON.stringify({
      message: 'Bad request! Please check your parameters'
    })
  });
}

/**
 * Add unhandledRejection Listener for Handlers
 *
 * @export
 * @returns {boolean} always true
 */
export function addunhandledRejectionListener() {
  process.on('unhandledRejection', (reason, p) => {
    console.log(
      'Unhandled Rejection at:',
      p,
      '\n\nreason:',
      reason,
      '\n\nstack:',
      reason.stack
    );
  });
  return true;
}

/**
 * Put sleep for a limited time (with async-await call)
 *
 * @export
 * @param {number} ms
 * @returns {Promise}
 */
export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * Create UUID with RFC4122 v4 Support
 *
 * @export
 * @returns {string} UUID
 */
export function createUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0; // eslint-disable-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8; // eslint-disable-line no-bitwise
    return v.toString(16);
  });
}

export function getIp(event) {
  return (
    event.requestContext.identity.sourceIp ||
    event.headers['x-forwarded-for'].split(',').pop() ||
    event.connection.remoteAddress ||
    event.socket.remoteAddress ||
    event.connection.socket.remoteAddress
  );
}
