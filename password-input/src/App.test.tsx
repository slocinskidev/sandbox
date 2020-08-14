import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('document have text - Password', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Password/i);
  expect(text).toBeInTheDocument();
});
