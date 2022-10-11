import React from 'react';
import { render, screen } from '@testing-library/react';

import Forms from 'pages/Forms/Forms';
import FormCard from '../components/FormCard/FormCard';

describe('Forms page', () => {
  test('render forms page', () => {
    render(<Forms />);

    [
      'Name:',
      'Surname:',
      'Birth:',
      'Country:',
      "Receive / Don't recieve notifications",
      'I consent to personal data',
    ].forEach((elementText) => {
      expect(screen.getByText(elementText)).toBeInTheDocument();
    });
  });
});

describe('User card', () => {
  test('render user card', () => {
    render(
      <FormCard
        name="Super"
        surname="User"
        date="2022-10-11"
        country="France"
        switcher="With notifications"
        picture="#"
      />
    );
  });
});
