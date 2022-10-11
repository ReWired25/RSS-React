import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <label>
        <p>Country:</p>
        <select name="selectCountry">
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="England">England</option>
        </select>
      </label>
    );
  }
}

export default Select;
