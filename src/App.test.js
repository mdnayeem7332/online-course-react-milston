import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getBytext } = render(<App />);
  const linkElement = getBytext(/learn react/i);
  expect(linkElement).toBeInthedocument();
});
