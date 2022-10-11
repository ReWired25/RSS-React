import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import data from 'assets/data/data';
import Layout from 'components/Layout/Layout';
import Card from '../components/Card/Card';
import AllCards from '../components/AllCards/AllCards';
import SearchBar from '../components/SearchBar/SearchBar';

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
    render(<SearchBar />);

    expect(screen.getByPlaceholderText('search...'));
  });
});

describe('card render', () => {
  test('render one card component', () => {
    render(<Card img="#" title="title" type="type" color="color" price="price" />);
  });
});

describe('all cards render', () => {
  test('render all cards component', () => {
    render(<AllCards />);
  });
});

describe('cards with data', () => {
  test('render each card with data', () => {
    data.forEach(({ img, title, type, color, price }) => {
      render(<Card img={img} title={title} type={type} color={color} price={price} />);
    });
  });
});
