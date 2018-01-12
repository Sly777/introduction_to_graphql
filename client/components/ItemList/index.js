import PropTypes from 'prop-types';
import { ItemList as StyledItemList } from './styles';
import connect from './store';

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <StyledItemList>
      <span>Order History</span>
      {data.getUser.orders.map(order => (
        <li key={order.id}>{order.restaurant.name}</li>
      ))}
    </StyledItemList>
  );
};
ItemList.propTypes = {
  data: PropTypes.object.isRequired
};

export default connect(ItemList);
