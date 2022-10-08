export interface IRoutesPagesProps {
  layoutPage: { path: string; page: JSX.Element };
  pages: { path: string; page: JSX.Element }[];
}

export interface INavigationProps {
  links: { path: string; name: string }[];
}

export interface ICardProps {
  img: string;
  title: string;
  type: string;
  color: string;
  price: string;
}

export interface ISearchBarState {
  value: string;
}
