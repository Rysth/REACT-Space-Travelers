import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../redux/Store';
import JoinButton from '../../../components/Missions/Buttons/JoinButton';

describe('Test', () => {
  const joinButton = (
    <Provider store={store}>
      <JoinButton id="1" setStatus={() => {}} />
    </Provider>
  );

  test('Create snapshot for a JoinButton', () => {
    const component = render(joinButton);
    expect(component).toMatchSnapshot();
  });

  test('JoinButton has a button', () => {
    render(joinButton);
    const description = screen.getByText('Join Mission');
    expect(description).toBeInTheDocument();
  });
});
