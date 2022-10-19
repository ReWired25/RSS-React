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

export interface IdataError {
  error: string;
}

export interface IMainState {
  data: {
    info: IdataInfo;
    results: IdataResult[];
  } | null;
  query: string;
  isLoading: boolean;
  isUpdated: boolean;
  requestError: boolean;
}

export enum URL {
  link = 'https://rickandmortyapi.com/api/character/?name=',
  queryinitial = '',
}

export enum Response {
  notFoundStatus = 404,
  notFoundMessage = 'No matches found! Please try another request!',
}
