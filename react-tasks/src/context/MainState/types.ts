export interface IdataInfo {
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
  page: string;
  query: string;
  isLoading: boolean;
  requestError: boolean;
}

export interface IMainAction {
  type: string;
  resultsState?: Partial<IMainState>;
}

export enum MainActionCase {
  results = 'results',
  prevPage = 'prev',
  nextPage = 'next',
}

export enum Page {
  step = 1,
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
