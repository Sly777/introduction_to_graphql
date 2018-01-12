import { graphql } from 'react-apollo';
import itemListGql from './itemList.gql';

const withData = graphql(itemListGql);

export default comp => withData(comp);
