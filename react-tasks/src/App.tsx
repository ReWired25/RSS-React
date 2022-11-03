import React from 'react';

import RoutesPages from 'components/RoutesPages';

import { pagesForRoutes } from 'constants/RoutesPages';

const App = () => {
  return <RoutesPages pages={pagesForRoutes} />;
};

export default App;
