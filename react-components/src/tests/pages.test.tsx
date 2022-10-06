import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AboutUs from '../pages/about-us';
import ErrorResponse from '../pages/error-response';
import Main from '../pages/main';

describe('render pages', () => {
  test('render pages component', () => {
    render(<AboutUs />);
    render(<Main />);
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ErrorResponse />} />
      </Routes>
    </BrowserRouter>;
  });
});

describe('search in main page', () => {
  test('check search component in main page', () => {
    render(<Main />);

    expect(screen.getByPlaceholderText('search...'));
  });
});