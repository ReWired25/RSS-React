import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from 'pages/Main';

import { AppContext } from 'context';
import { mockContextValue } from './mocks/context';

describe('mock api', () => {
  test('test mocking api request', () => {
    render(
      <AppContext.Provider value={mockContextValue}>
        <Main />
      </AppContext.Provider>
    );
    expect(screen.getByText('Loading'));
    setTimeout(() => {
      expect(screen.getByText('testName'));
    }, 300);
  });
});
