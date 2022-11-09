import { createAsyncThunk } from '@reduxjs/toolkit';

import { handleCurrentResults, handleResultsSorting } from './request-helper-functions';

import { RootState } from 'store/types';
import { URL, Response } from 'store/MainState/types';

export const dataRequest = createAsyncThunk('dataRequest', async (_, { getState }) => {
  const { MainState } = <RootState>getState();

  const response = await fetch(URL.link + MainState.apiPage + URL.queryName + MainState.query);

  if (response.status === Response.notFoundStatus) {
    throw new Error(Response.notFoundMessage);
  }

  const data = await response.json();
  const dataResults = handleCurrentResults(data.results, MainState);
  const currentResults = handleResultsSorting(dataResults, MainState);

  return { data: data, currentResults: currentResults, isLoading: false };
});
