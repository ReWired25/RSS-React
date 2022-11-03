import { IMainState, URL, Page, MainActionCase } from './types';

export const initMainState: IMainState = {
  data: null,
  currentResults: null,
  apiPage: URL.page,
  viewPage: URL.page,
  query: URL.queryinitial,
  isLoading: true,
  requestError: false,
  resultsOnPage: Page.maxResults,
  currentSorting: MainActionCase.sortDefault,
};
