import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/layout';

import Main from './pages/main';
import AboutUs from './pages/about-us';
import ErrorResponse from './pages/error-response';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="*" element={<ErrorResponse />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
