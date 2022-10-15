import React from 'react';

import Layout from '../components/Layout';
import Main from '../pages/Main';
import AboutUs from '../pages/AboutUs';
import ErrorResponse from '../pages/ErrorResponse';
import Forms from '../pages/Forms';

export const pagesForRoutes = [
  { path: '/', page: <Layout /> },
  { path: 'index', page: <Main /> },
  { path: 'about-us', page: <AboutUs /> },
  { path: 'forms', page: <Forms /> },
  { path: '*', page: <ErrorResponse /> },
];
