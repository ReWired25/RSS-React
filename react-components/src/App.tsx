import React from 'react';
import Layout from 'components/layout';

import Main from './pages/main';
import AboutUs from './pages/about-us';
import ErrorResponse from './pages/error-response';

import RoutesPages from 'components/routes-pages';

class App extends React.Component {
  render() {
    return (
      <RoutesPages
        layoutPage={{ path: '/', page: <Layout /> }}
        pages={[
          { path: 'index', page: <Main /> },
          { path: 'about-us', page: <AboutUs /> },
          { path: '*', page: <ErrorResponse /> },
        ]}
      />
    );
  }
}

export default App;
