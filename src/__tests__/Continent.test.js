import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Continent from '../Components/Continent';
import store from '../redux/configureStore';

it('Dragons renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Continent />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});