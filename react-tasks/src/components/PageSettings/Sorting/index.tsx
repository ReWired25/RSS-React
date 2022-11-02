import React from 'react';

const Sorting = () => {
  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <label className="sorting-container">
      <p>Sorting on page:</p>
      <select name="sorting" className="sorting" onChange={(e) => handleValue(e)}>
        <option value="STANDART">By creation date</option>
        <option value="ASC">By alph (ASC)</option>
        <option value="DESC">By alph (DESC)</option>
      </select>
    </label>
  );
};

export default Sorting;
