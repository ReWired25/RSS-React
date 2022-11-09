import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sorting } from 'store/MainState/reducer';

import { RootState } from 'store/types';
import { Sort } from 'store/MainState/types';

const Sorting = () => {
  const { MainState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sorting(e.target.value));
  };

  return (
    <label className="sorting-container">
      <p>Sorting on page:</p>
      <select
        name="sorting"
        className="sorting"
        onChange={(e) => handleValue(e)}
        defaultValue={MainState.currentSorting}
      >
        <option value={Sort.default}>By creation date</option>
        <option value={Sort.asc}>By alph (ASC)</option>
        <option value={Sort.desc}>By alph (DESC)</option>
      </select>
    </label>
  );
};

export default Sorting;
