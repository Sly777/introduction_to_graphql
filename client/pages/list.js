import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import ItemList from '../components/ItemList';

export default withData(() => (
  <App>
    <Helmet>
      <title>list</title>
    </Helmet>
    <div>
      <h1>list</h1>
      <ItemList />
    </div>
  </App>
));
