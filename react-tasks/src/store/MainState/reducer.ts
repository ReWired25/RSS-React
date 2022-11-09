import { createSlice } from '@reduxjs/toolkit';

import { initMainState } from '.';
import { changePageMaxResults, changePageMinResults } from 'store/MainState/reducer-functions';
import { dataRequest } from 'store/dataRequestApi';

import {
  Idata,
  Page,
  URL,
  InewResultsAction,
  IsortingAction,
  ItotalResultsAndPagesAction,
  IdataResult,
} from './types';

export const MainSlice = createSlice({
  name: 'MainReducer',
  initialState: initMainState,
  reducers: {
    newResults: (state, action: InewResultsAction) => {
      const { query, isLoading, requestError } = action.payload;
      state.query = query as string;
      state.isLoading = isLoading as boolean;
      state.requestError = requestError as boolean;
    },
    minMaxResults: (state, action: ItotalResultsAndPagesAction) => {
      state.resultsOnPage = action.payload;
      state.apiPage = URL.page;
      state.viewPage = URL.page;
    },
    changePage: (state, action: ItotalResultsAndPagesAction) => {
      const currentPages =
        state.resultsOnPage === Page.minResults
          ? changePageMinResults(state, action.payload)
          : changePageMaxResults(state, action.payload);
      if (!currentPages) return;
      const { currentApiPage, currentViewPage } = currentPages;
      if (currentApiPage) {
        state.apiPage = currentApiPage;
        state.viewPage = currentViewPage;
      } else {
        state.viewPage = currentViewPage;
      }
    },
    sorting: (state, action: IsortingAction) => {
      state.currentSorting = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataRequest.fulfilled, (state, action) => {
        const { data, currentResults, isLoading } = action.payload;
        state.data = data as Idata;
        state.currentResults = currentResults as IdataResult[];
        state.isLoading = isLoading;
      })
      .addCase(dataRequest.rejected, (state) => {
        state.requestError = true;
        state.isLoading = false;
      });
  },
});

export const { newResults, minMaxResults, changePage, sorting } = MainSlice.actions;
export default MainSlice.reducer;
