import React from 'react';
import Layout from 'components/Layout/Layout';

import Main from './pages/Main/Main';
import AboutUs from './pages/AboutUs/AboutUs';
import ErrorResponse from './pages/ErrorResponse/ErrorResponse';

import RoutesPages from 'components/RoutesPages/RoutesPages';

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
