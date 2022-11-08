import React from 'react';

import RoutesPages from 'components/RoutesPages';

import { PAGES_FOR_ROUTES } from 'constants/RoutesPages';

const App = () => {
  return <RoutesPages pages={PAGES_FOR_ROUTES} />;
};

export default App;
