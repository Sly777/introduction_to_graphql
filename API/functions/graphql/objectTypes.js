import { resolver, attributeFields } from 'graphql-sequelize';
import { GraphQLObjectType, GraphQLList } from 'graphql';
import {
  User,
  Order,
  Orders,
  UserOrders,
  OrderDetail,
  DeliveryType,
  asOrderDetail,
  asDeliveryType,
  Restaurant,
  asOrderRestaurant,
  asOrderItem,
  OrderItem
} from '../../models';

/* eslint-disable no-use-before-define */

const orderType = new GraphQLObjectType({
  name: 'Order',
  description: 'Order Data',
  fields: () =>
    Object.assign(attributeFields(Order), {
      user: {
        type: userType,
        resolve: resolver(UserOrders)
      },
      orderDetail: {
        type: orderDetailType,
        resolve: resolver(asOrderDetail)
      },
      restaurant: {
        type: restaurantType,
        resolve: resolver(asOrderRestaurant)
      },
      items: {
        type: new GraphQLList(orderItemType),
        resolve: resolver(asOrderItem)
      }
    })
});

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User Data',
  fields: () =>
    Object.assign(attributeFields(User), {
      orders: {
        type: new GraphQLList(orderType),
        resolve: resolver(Orders)
      }
    })
});

const orderDetailType = new GraphQLObjectType({
  name: 'OrderDetail',
  description: 'Order Detail Data',
  fields: () =>
    Object.assign(attributeFields(OrderDetail), {
      deliveryType: {
        type: deliveryTypeType,
        resolve: resolver(asDeliveryType)
      }
    })
});

const deliveryTypeType = new GraphQLObjectType({
  name: 'DeliveryType',
  description: 'Delivery Type Data',
  fields: () => Object.assign(attributeFields(DeliveryType), {})
});

const restaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  description: 'Restaurant Data',
  fields: () =>
    Object.assign(attributeFields(Restaurant), {
      orders: {
        type: new GraphQLList(orderType),
        resolve: resolver(Order)
      }
    })
});

const orderItemType = new GraphQLObjectType({
  name: 'OrderItem',
  description: 'Order Item Data',
  fields: () => Object.assign(attributeFields(OrderItem), {})
});

/* eslint-enable no-use-before-define */

export { orderType, userType, orderDetailType, restaurantType };
