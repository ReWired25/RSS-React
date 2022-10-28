import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Forms from 'pages/Forms';
import FormCard from '../components/FormCard';

import { formElementsText, formTestData } from './mocks/data';

describe('Forms page', () => {
  test('render forms page and test fields', () => {
    render(<Forms />);

    formElementsText.forEach((elementText) => {
      expect(screen.getByText(elementText)).toBeInTheDocument();
    });

    const inputTest = screen.getByTestId('name');
    userEvent.type(inputTest, 'Mason');
    expect(inputTest).toHaveValue('Mason');

    const selectTest = screen.getByRole('combobox');
    userEvent.selectOptions(selectTest, 'Germany');
    expect(selectTest).toHaveValue('Germany');

    const switcherTest = screen.getByTestId('switcher') as HTMLInputElement;
    userEvent.click(switcherTest);
    expect(switcherTest.checked).toBeTruthy();
  });
});

describe('User card', () => {
  test('render user card', () => {
    render(<FormCard FormCardData={formTestData} />);
  });
});
