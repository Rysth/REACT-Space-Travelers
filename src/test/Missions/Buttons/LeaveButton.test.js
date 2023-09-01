import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../redux/Store';
import LeaveButton from '../../../components/Missions/Buttons/LeaveButton';

describe('Test', () => {
  const leaveButton = (
    <Provider store={store}>
      <LeaveButton id="1" setStatus={() => {}} />
    </Provider>
  );

  test('Create snapshot for a JoinButton', () => {
    const component = render(leaveButton);
    expect(component).toMatchSnapshot();
  });

  test('LeaveButton is a button', () => {
    render(leaveButton);
    const description = screen.getByText('Leave Mission');
    expect(description).toBeInTheDocument();
  });
});
