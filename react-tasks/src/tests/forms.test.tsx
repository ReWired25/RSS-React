import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Forms from 'pages/Forms';
import FormCard from '../components/FormCard';
import Input from '../components/UserFormComponents/Input';
import Select from '../components/UserFormComponents/Select';
import Switcher from '../components/UserFormComponents/Switcher';

import { formElementsText, formTestData } from './mocks/data';

describe('Forms page', () => {
  test('render forms page', () => {
    render(<Forms />);

    formElementsText.forEach((elementText) => {
      expect(screen.getByText(elementText)).toBeInTheDocument();
    });
  });
});

describe('User card', () => {
  test('render user card', () => {
    render(<FormCard FormCardData={formTestData} />);
  });
});

// describe('Input events', () => {
//   test('Input user type event', async () => {
//     render(
//       <Input
//         inputClassName="testInput"
//         inputType="text"
//         inputName="inputTest"
//         labelText="test"
//         validationMessage="it's test"
//       />
//     );

//     const inputTest = screen.getByTestId('inputTest');
//     userEvent.type(inputTest, 'text');
//     expect(inputTest).toHaveValue('text');
//   });

//   test('Select user event', async () => {
//     render(<Select />);

//     const inputTest = screen.getByRole('combobox');
//     userEvent.selectOptions(inputTest, 'Germany');
//     expect(inputTest).toHaveValue('Germany');
//   });

//   test('Switcher user type event', async () => {
//     render(<Switcher />);

//     const inputTest = screen.getByRole('checkbox') as HTMLInputElement;
//     userEvent.click(inputTest);
//     expect(inputTest.checked).toBeTruthy();
//   });
// });
