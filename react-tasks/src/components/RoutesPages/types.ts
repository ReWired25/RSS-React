export interface IRoutesPagesProps {
  pages: { path: string; page: JSX.Element }[];
}

export enum RouteValue {
  Layout = 0,
  Main = 1,
  MainPath = 'index',
}
