import { URL, Page } from './types';

export const initMainState = {
  data: null,
  currentResults: null,
  apiPage: URL.page,
  viewPage: URL.page,
  query: URL.queryinitial,
  isLoading: true,
  requestError: false,
  resultsOnPage: Page.maxResults,
};
