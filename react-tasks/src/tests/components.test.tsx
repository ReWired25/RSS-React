import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import Card from '../components/Card';
import AllCards from '../components/AllCards';
import SearchBar from '../components/SearchBar';
import CardModal from 'components/CardModal';

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
    render(<SearchBar onDataChange={() => {}} />);
    expect(screen.getByPlaceholderText('search...'));
  });
});

describe('card render', () => {
  test('render one card component', () => {
    render(<Card data={characterTestData} handleModalData={() => {}} />);
    expect(screen.getByText('testName'));
  });
});

describe('all cards render', () => {
  test('render all cards component', () => {
    render(<AllCards data={charactersTestResults} />);
    expect(screen.getByText('testName'));
  });
});

describe('cards with data', () => {
  test('render each card with data', () => {
    charactersTestResults.forEach((data) => {
      render(<Card key={data.id} data={data} handleModalData={() => {}} />);
      expect(screen.getByText('testName'));
    });
  });
});

describe('modal window', () => {
  test('render modal window with data', () => {
    render(<CardModal data={characterTestData} onModalClose={() => {}} />);
    expect(screen.getByText(/testGender/));
  });
});
