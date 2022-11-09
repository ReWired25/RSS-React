import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from 'store';
import Forms from 'pages/Forms';
import FormCard from '../components/FormCard';

// import { AppContext } from 'context';

import { formElementsText, formTestData } from './mocks/data';
// import { mockContextValue } from './mocks/context';

describe('Forms page', () => {
  test('render forms page and test fields', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );

    formElementsText.forEach((elementText) => {
      expect(screen.getByText(elementText)).toBeInTheDocument();
    });

    const inputTest = screen.getByTestId('name');
    userEvent.type(inputTest, 'Mason');
    expect(inputTest).toHaveValue('SuperMason');

    const selectTest = screen.getByRole('combobox');
    userEvent.selectOptions(selectTest, 'Germany');
    expect(selectTest).toHaveValue('Germany');

    const switcherTest = screen.getByTestId('switcher') as HTMLInputElement;
    expect(switcherTest.checked).toBeTruthy();
  });
});

describe('User card', () => {
  test('render user card', () => {
    render(
      <Provider store={store}>
        <FormCard FormCardData={formTestData} />
      </Provider>
    );
  });
});
