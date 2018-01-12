import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { User, Order, Restaurant } from '../../models';
import { userType, orderType, restaurantType } from './objectTypes';

export default () =>
  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      // Field for retrieving a user by ID
      getUser: {
        type: userType,
        // args will automatically be mapped to `where`
        args: {
          id: {
            description: 'id of the user',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: resolver(User)
      },

      getOrder: {
        type: orderType,
        args: {
          id: {
            description: 'id of the order',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: resolver(Order)
      },

      getRestaurant: {
        type: restaurantType,
        args: {
          id: {
            description: 'id of the restaurant',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: resolver(Restaurant)
      },

      restaurants: {
        type: new GraphQLList(restaurantType),
        resolve: resolver(Restaurant)
      }
    }
  });
