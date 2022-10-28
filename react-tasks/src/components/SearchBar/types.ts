export interface ISearchBarProps {
  onDataChange: (searchInput: string) => void;
}

export enum SearchSubmit {
  key = 'Enter',
}
