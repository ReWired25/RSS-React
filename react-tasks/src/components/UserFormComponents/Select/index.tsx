import React from 'react';

import { SelectCountries } from 'constants/Select';

import { ISelectProps } from './types';

const Select = (props: ISelectProps) => {
  return (
    <label className="select-country-container">
      <p>Country:</p>
      <select className="select-country" {...props.register('country')}>
        {SelectCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
