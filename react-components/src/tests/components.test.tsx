import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import data from 'assets/data/data';
import Layout from 'components/layout';
import Card from '../components/card';
import AllCards from '../components/all-cards';
import SearchBar from '../components/search-bar';

describe('layout render', () => {
  test('render layout component', () => {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>;
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
    data.forEach((cardData) => {
      render(
        <Card
          img={cardData.img}
          title={cardData.title}
          type={cardData.type}
          color={cardData.color}
          price={cardData.price}
        />
      );
    });
  });
});
