import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'store';
import Layout from 'components/Layout';
import Card from '../components/Card';
import AllCards from '../components/AllCards';
import SearchBar from '../components/SearchBar';

import { characterTestData, charactersTestResults } from './mocks/data';

describe('layout render', () => {
  test('render layout component', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    );
  });
});

describe('search bar check', () => {
  test('check search bar in document', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByPlaceholderText('search...'));
  });
});

describe('card render', () => {
  test('render one card component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card data={characterTestData} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('testName'));
  });
});

describe('all cards render', () => {
  test('render all cards component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCards data={charactersTestResults} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('testName'));
  });
});

describe('cards with data', () => {
  test('render each card with data', () => {
    charactersTestResults.forEach((data) => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Card key={data.id} data={data} />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByText('testName'));
    });
  });
});
