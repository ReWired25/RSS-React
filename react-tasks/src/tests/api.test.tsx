import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from 'pages/Main';

describe('mock api', () => {
  test('test mocking api request', () => {
    render(<Main />);
    expect(screen.getByText('Loading'));
    setTimeout(() => {
      expect(screen.getByText('testName'));
    }, 300);
  });
});
