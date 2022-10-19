export interface ISearchBarProps {
  onDataChange: (searchInput: string) => void;
}

export interface ISearchBarState {
  value: string;
}

export enum SearchSubmit {
  key = 'Enter',
}
