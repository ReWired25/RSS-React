import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IRoutesPagesProps, RouteValue } from './types';

const RoutesPages = (props: IRoutesPagesProps) => {
  return (
    <Routes>
      <Route
        path={props.pages[RouteValue.Layout].path}
        element={props.pages[RouteValue.Layout].page}
      >
        {props.pages.slice(RouteValue.Main).map(({ path, page }) => {
          if (path === RouteValue.MainPath) {
            return <Route key={path} index element={page} />;
          }
          return <Route key={path} path={path} element={page} />;
        })}
      </Route>
    </Routes>
  );
};

export default RoutesPages;
