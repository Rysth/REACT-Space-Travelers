import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../redux/Store';
import Missions from '../../components/Missions/Missions';

describe('Add Test', () => {
  const missionsContainer = (
    <Provider store={store}>
      <Missions />
    </Provider>
  );

  test('Take snapshot of this container', () => {
    const container = render(missionsContainer);
    expect(container).toMatchSnapshot();
  });
});
