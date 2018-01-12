import Order from './order';
import User from './user';
import OrderDetail from './orderDetail';
import DeliveryType from './deliveryType';
import Restaurant from './restaurant';
import OrderItem from './orderItem';

export const Orders = User.hasMany(Order, { as: 'orders' });
export const UserOrders = Order.belongsTo(User, { as: 'user' });
export const asOrderDetail = Order.belongsTo(OrderDetail, {
  as: 'orderdetail'
});
export const asDeliveryType = OrderDetail.belongsTo(DeliveryType, {
  as: 'deliverytype'
});
export const asOrderRestaurant = Order.belongsTo(Restaurant, {
  as: 'restaurant'
});
export const asOrderItem = Order.hasMany(OrderItem, { as: 'items' });

export { Order, OrderDetail, User, DeliveryType, Restaurant, OrderItem };
