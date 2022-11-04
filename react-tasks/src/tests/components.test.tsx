import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppContext } from 'context';
import Layout from 'components/Layout';
import Card from '../components/Card';
import AllCards from '../components/AllCards';
import SearchBar from '../components/SearchBar';

import { mockContextValue } from './mocks/context';
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
      <AppContext.Provider value={mockContextValue}>
        <SearchBar />
      </AppContext.Provider>
    );
    expect(screen.getByPlaceholderText('search...'));
  });
});

describe('card render', () => {
  test('render one card component', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card data={characterTestData} />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText('testName'));
  });
});

describe('all cards render', () => {
  test('render all cards component', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCards data={charactersTestResults} />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText('testName'));
  });
});

describe('cards with data', () => {
  test('render each card with data', () => {
    charactersTestResults.forEach((data) => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Card key={data.id} data={data} />} />
          </Routes>
        </BrowserRouter>
      );
      expect(screen.getByText('testName'));
    });
  });
});
