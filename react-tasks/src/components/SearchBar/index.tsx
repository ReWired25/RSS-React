import React, { ChangeEvent, useContext } from 'react';

import { AppContext } from 'context';

import { MainActionCase } from 'context/MainState/types';
import { SearchSubmit } from './types';
import { SearchActionCase } from 'context/SearchState/types';

const SearchBar = () => {
  const AppState = useContext(AppContext);
  const { SearchState, MainState, SearchDispatch, MainDispatch } = AppState;

  const handleChange = (e: ChangeEvent) => {
    const searchInput = e.target as HTMLInputElement;
    SearchDispatch({ type: SearchActionCase.changeValue, inputValue: searchInput.value });
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== SearchSubmit.key) return;

    if (SearchState.value !== MainState.query) {
      const newState = {
        query: SearchState.value,
        isLoading: true,
        requestError: false,
      };
      MainDispatch({ type: MainActionCase.results, resultsState: newState });
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
