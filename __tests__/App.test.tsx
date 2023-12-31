/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';
import {View} from 'react-native';
afterEach(() => {
  cleanup();
});

it('renders correctly', () => {
  renderer.create(<App />);
});

it('renders views', () => {
  renderer.create(<View />);
});
