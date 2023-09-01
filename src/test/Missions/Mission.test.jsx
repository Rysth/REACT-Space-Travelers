import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../redux/Store';
import MissionItem from '../../components/Missions/Item/MissionItem';

describe('Test', () => {
  const mission = (
    <Provider store={store}>
      <MissionItem
        id="1"
        index={1}
        title="Thaicom"
        parragraph="Hello World!"
        reserved={false}
      />
    </Provider>
  );

  test('Create snapshot for a MissionItem', () => {
    const component = render(mission);
    expect(component).toMatchSnapshot();
  });

  test('Mission has a button element', () => {
    render(mission);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Mission has a parragraph', () => {
    render(mission);
    const description = screen.getByText('Hello World!');
    expect(description).toBeInTheDocument();
  });

  test('It has a button with text Reserve Rocket', () => {
    render(mission);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Join Mission');
  });

  test('Mission has a Title', () => {
    render(mission);
    const title = screen.getByText('Thaicom');
    expect(title).toBeInTheDocument();
  });
});
