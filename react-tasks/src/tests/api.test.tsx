import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';
import Main from 'pages/Main';

// import { mockContextValue } from './mocks/context';

describe('mock api', () => {
  test('test mocking api request', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.getByText('Loading'));
    setTimeout(() => {
      expect(screen.getByText('testName'));
    }, 300);
  });
});
