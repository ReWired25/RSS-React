import React from 'react';

import RoutesPages from 'components/RoutesPages/RoutesPages';
import { pagesForRoutes } from 'constants/RoutesPages';

class App extends React.Component {
  render() {
    return <RoutesPages pages={pagesForRoutes} />;
  }
}

export default App;
