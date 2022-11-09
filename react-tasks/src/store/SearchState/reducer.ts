import { createSlice } from '@reduxjs/toolkit';

import { initSearchState } from '.';

import { ISearchAction } from './types';

export const SearchSlice = createSlice({
  name: 'SearchReducer',
  initialState: initSearchState,
  reducers: {
    changeSearchValue: (state, action: ISearchAction) => {
      state.value = action.payload;
    },
  },
});

export const { changeSearchValue } = SearchSlice.actions;
export default SearchSlice.reducer;
