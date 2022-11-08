import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IRoutesPagesProps, RouteValue } from './types';

const RoutesPages = ({ pages }: IRoutesPagesProps) => {
  return (
    <Routes>
      <Route path={pages[RouteValue.Layout].path} element={pages[RouteValue.Layout].page}>
        {pages.slice(RouteValue.Main).map(({ path, page }, index) => {
          if (path === RouteValue.MainPath) {
            return <Route key={index} index element={page} />;
          }
          return <Route key={index} path={path} element={page} />;
        })}
      </Route>
    </Routes>
  );
};

export default RoutesPages;
