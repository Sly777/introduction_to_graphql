import * as models from '../models';
import * as enums from '../enums';

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

export const handler = async (event, context, cb) => {
  // DB CREATION
  await models.User.sync();
  await models.DeliveryType.sync();
  await models.Restaurant.sync();
  await models.OrderDetail.sync();
  await models.Order.sync();
  await models.OrderItem.sync();

  // ENUM DATA CREATION
  await enums.deliveryType.syncData();

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'DB is prepared to use!',
      status: true
    })
  };

  cb(null, response);
};
