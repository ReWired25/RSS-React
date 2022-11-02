export interface IdataInfo {
  [index: string]: number | string | null;
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface IdataResult {
  id: number;
  image: string;
  name: string;
  gender: string;
  species: string;
}

export interface IMainState {
  data: {
    info: IdataInfo;
    results: IdataResult[];
  } | null;
  currentResults: IdataResult[] | null;
  apiPage: string;
  viewPage: string;
  query: string;
  isLoading: boolean;
  requestError: boolean;
  resultsOnPage: Page;
}

export interface IMainAction {
  type: string;
  resultsState?: Partial<IMainState>;
}

export enum MainActionCase {
  results = 'results',
  prevPage = 'prev',
  nextPage = 'next',
  minResults = 'minResults',
  maxResults = 'maxResults',
}

export enum Page {
  step = 1,
  allPagesMultiplier = 2,
  minResults = '10',
  maxResults = '20',
}

export enum TotalResults {
  start = 0,
  end = 10,
}

export enum URL {
  link = 'https://rickandmortyapi.com/api/character?page=',
  page = '1',
  queryName = '&name=',
  queryinitial = '',
}

export enum Response {
  notFoundStatus = 404,
  notFoundMessage = 'No matches found! Please try another request!',
}
