import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/Store';
import Rocket from '../components/Rockets/Rocket';

describe('Test', () => {
  const rocket = (
    <Provider store={store}>
      <Rocket
        description="Rockets"
        id="1"
        image="none"
        isReserved={false}
        name="roket"
      />
    </Provider>
  );

  test('Create snapshot for rocket', () => {
    const component = render(rocket);
    expect(component).toMatchSnapshot();
  });

  test('Rocket has a button element', () => {
    render(rocket);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Rocket has a description', () => {
    render(rocket);
    const description = screen.getByText('Rockets');
    expect(description).toBeInTheDocument();
  });

  test('It has an image component', () => {
    render(rocket);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('It has a button with text Reserve Rocket', () => {
    render(rocket);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Reserve Rocket');
  });

  test('Rocket has a name', () => {
    render(rocket);
    const name = screen.getByText('roket');
    expect(name).toBeInTheDocument();
  });
});
