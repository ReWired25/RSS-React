import React from 'react';

import Layout from '../components/Layout/Layout';
import Main from '../pages/Main/Main';
import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorResponse from '../pages/ErrorResponse/ErrorResponse';

export const pagesForRoutes = [
  { path: '/', page: <Layout /> },
  { path: 'index', page: <Main /> },
  { path: 'about-us', page: <AboutUs /> },
  { path: '*', page: <ErrorResponse /> },
];
