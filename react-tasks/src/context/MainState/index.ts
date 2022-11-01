import { URL } from './types';

export const initMainState = {
  data: null,
  page: URL.page,
  query: URL.queryinitial,
  isLoading: true,
  requestError: false,
};
