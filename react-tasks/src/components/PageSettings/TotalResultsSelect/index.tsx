import React from 'react';
import { useDispatch } from 'react-redux';

import { minMaxResults } from 'store/MainState/reducer';

import { Page } from 'store/MainState/types';

const TotalResultsSelect = () => {
  const dispatch = useDispatch();

  const handeTotalResults = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(minMaxResults(e.target.value as Page));
  };

  return (
    <label className="total-results-select-container">
      <p>Total on page:</p>
      <select
        name="total-results-select"
        className="total-results-select"
        onChange={(e) => handeTotalResults(e)}
        defaultValue={Page.maxResults}
      >
        <option value={Page.maxResults}>20 characters</option>
        <option value={Page.minResults}>10 characters</option>
      </select>
    </label>
  );
};

export default TotalResultsSelect;
