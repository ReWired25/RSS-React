import React, { ChangeEvent, useState, useEffect } from 'react';

import { setStorage, getStorage } from 'localStorage';

import { ISearchBarProps, SearchSubmit } from './types';

const SearchBar = (props: ISearchBarProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storageValue = getStorage();
    if (!storageValue) return;
    setValue(storageValue);
  }, []);

  const handleChange = (e: ChangeEvent) => {
    const searchInput = e.target as HTMLInputElement;
    setValue(searchInput.value);
    setStorage(searchInput.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === SearchSubmit.key) {
      props.onDataChange(value);
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
      value={value}
    />
  );
};

export default SearchBar;
