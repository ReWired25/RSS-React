import React, { useContext } from 'react';

import { AppContext } from 'context';

import { MainActionCase } from 'context/MainState/types';

const TotalResultsSelect = () => {
  const AppState = useContext(AppContext);
  const { MainDispatch } = AppState;

  const handeTotalResults = (e: React.ChangeEvent<HTMLSelectElement>) => {
    MainDispatch({ type: e.target.value });
  };

  return (
    <label className="total-results-select-container">
      <p>Total on page:</p>
      <select
        name="total-results-select"
        className="total-results-select"
        onChange={(e) => handeTotalResults(e)}
      >
        <option value={MainActionCase.maxResults}>20 characters</option>
        <option value={MainActionCase.minResults}>10 characters</option>
      </select>
    </label>
  );
};

export default TotalResultsSelect;
