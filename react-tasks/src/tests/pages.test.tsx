import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store';
import AboutUs from '../pages/AboutUs';
import ErrorResponse from '../pages/ErrorResponse';
import Main from '../pages/Main';
import CharacterInfo from 'pages/CharacterInfo';

// import { AppContext } from '../context/index';
// import { mockContextValue } from './mocks/context';

describe('render pages', () => {
  test('render pages component', () => {
    render(<AboutUs />);
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ErrorResponse />} />
      </Routes>
    </BrowserRouter>;
  });
});

describe('search in main page', () => {
  test('check search component in main page', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    expect(screen.getByPlaceholderText('search...'));
  });
});

describe('character info page', () => {
  test('render character page with mock data', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CharacterInfo />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('testOrigin'));
  });
});
