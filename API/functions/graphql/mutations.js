import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { User } from '../../models';
import { userType } from './objectTypes';

export default () =>
  new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createUser: {
        type: userType,
        args: {
          email: {
            type: new GraphQLNonNull(GraphQLString)
          },
          password: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },

        async resolve(root, params /* , options */) {
          const newUser = await User.create({
            email: params.email,
            password: params.password
          });
          if (!newUser) {
            throw new Error('Error adding new user');
          }
          return newUser;
        }
      }
    }
  });
