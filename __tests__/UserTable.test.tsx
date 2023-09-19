import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserTable from '../components/UserTable';
import {cleanup} from '@testing-library/react-native';
describe('UserTable', () => {
  afterEach(() => {
    cleanup();
  });
  it('renders the table', () => {
    const {getByPlaceholderText} = render(<UserTable />);

    expect(getByPlaceholderText('Search by name')).toBeTruthy();
  });

  it('filters users by name when searching', () => {
    const {getByPlaceholderText, getByText} = render(<UserTable />);
    const searchInput = getByPlaceholderText('Search by name');

    fireEvent.changeText(searchInput, 'Chris');
    expect(getByText('Christian Grohmann')).toBeTruthy();

    fireEvent.changeText(searchInput, 'NonexistentUser');
    expect(
      getByText(
        'This user name does not exist! Please specify an existing user name!',
      ),
    ).toBeTruthy();
  });
});
