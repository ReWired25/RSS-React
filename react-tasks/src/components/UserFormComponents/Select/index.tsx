import React from 'react';

import { SelectCountries } from 'constants/Select';

class Select extends React.Component {
  render() {
    return (
      <label className="select-country-container">
        <p>Country:</p>
        <select className="select-country" name="selectCountry">
          {SelectCountries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;
