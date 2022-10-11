import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <label className="select-country-container">
        <p>Country:</p>
        <select className="select-country" name="selectCountry">
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="England">England</option>
        </select>
      </label>
    );
  }
}

export default Select;
