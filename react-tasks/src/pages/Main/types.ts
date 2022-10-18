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
}
