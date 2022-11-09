import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeSearchValue } from 'store/SearchState/reducer';
import { newResults } from 'store/MainState/reducer';

import { RootState } from 'store/types';
import { SearchSubmit } from './types';

const SearchBar = () => {
  const { SearchState, MainState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent) => {
    const searchInput = e.target as HTMLInputElement;
    dispatch(changeSearchValue(searchInput.value));
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== SearchSubmit.key) return;

    if (SearchState.value !== MainState.query) {
      dispatch(
        newResults({
          query: SearchState.value,
          isLoading: true,
          requestError: false,
        })
      );
    }
  };

  return (
    <input
      className="search-bar"
      name="search"
      type="search"
      placeholder="search..."
      onChange={(e) => handleChange(e)}
      onKeyUp={(e) => handleSearchSubmit(e)}
      value={SearchState.value}
    />
  );
};

export default SearchBar;
