import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/store';
import RocketContainer from '../components/Rockets/Rocket';

describe('Add Test', () => {
  const rocketContainer = (
    <Provider store={store}>
      <RocketContainer />
    </Provider>
  );

  test('Take snapshot of this container', () => {
    const container = render(rocketContainer);
    expect(container).toMatchSnapshot();
  });

  test('It has a button element', () => {
    render(rocketContainer);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('It has a button with text Reserve Rocket', () => {
    render(rocketContainer);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Reserve Rocket');
  });

  test('It has a button with text Reserve Rocket', () => {
    render(rocketContainer);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Reserve Rocket');
  });
});
