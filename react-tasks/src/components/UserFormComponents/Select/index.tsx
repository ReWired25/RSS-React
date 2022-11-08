import React from 'react';

import { SELECT_COUNTRIES } from 'constants/Select';

import { ISelectProps } from './types';

const Select = ({ register }: ISelectProps) => {
  return (
    <label className="select-country-container">
      <p>Country:</p>
      <select className="select-country" {...register('country')}>
        {SELECT_COUNTRIES.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
