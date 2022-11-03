import React, { useContext } from 'react';

import { AppContext } from 'context';

import { MainActionCase } from 'context/MainState/types';

const Sorting = () => {
  const AppState = useContext(AppContext);
  const { MainDispatch } = AppState;

  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    MainDispatch({ type: e.target.value });
  };

  return (
    <label className="sorting-container">
      <p>Sorting on page:</p>
      <select name="sorting" className="sorting" onChange={(e) => handleValue(e)}>
        <option value={MainActionCase.sortDefault}>By creation date</option>
        <option value={MainActionCase.sortAsc}>By alph (ASC)</option>
        <option value={MainActionCase.sortDesc}>By alph (DESC)</option>
      </select>
    </label>
  );
};

export default Sorting;
