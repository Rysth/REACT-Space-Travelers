import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../redux/Store';
import TagStatus from '../../../components/Missions/Tags/TagStatus';

describe('Test', () => {
  const tag = (
    <Provider store={store}>
      <TagStatus text="Hello World!" classList="hello-tag" />
    </Provider>
  );

  test('Create snapshot for a TagStatus', () => {
    const component = render(tag);
    expect(component).toMatchSnapshot();
  });

  test('TagStatus has a parragraph', () => {
    render(tag);
    const description = screen.getByText('Hello World!');
    expect(description).toBeInTheDocument();
  });
});
