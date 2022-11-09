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
  origin: Record<string, string>;
  location: Record<string, string>;
}

export interface Idata {
  info: IdataInfo;
  results: IdataResult[];
}

export interface IMainState {
  data: Idata | null;
  currentResults: IdataResult[] | null;
  apiPage: string;
  viewPage: string;
  query: string;
  isLoading: boolean;
  requestError: boolean;
  resultsOnPage: Page;
  currentSorting: string;
}

export interface InewResultsAction {
  type: string;
  payload: Partial<IMainState>;
}

export interface IsortingAction {
  type: string;
  payload: string;
}

export interface ItotalResultsAndPagesAction {
  type: string;
  payload: Page;
}

export enum Page {
  step = 1,
  allPagesMultiplier = 2,
  minResults = '10',
  maxResults = '20',
  prevPage = 'prev',
  nextPage = 'next',
}

export enum Sort {
  asc = 'ASC',
  desc = 'DESC',
  default = 'DEFAULT',
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
