export interface ISearchState {
  value: string;
}

export interface ISearchAction {
  type: string;
  inputValue: string;
}

export enum SearchActionCase {
  changeValue = 'changeValue',
}
