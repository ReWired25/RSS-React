import React from 'react';

import Layout from '../components/Layout/Layout';
import Main from '../pages/Main/Main';
import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorResponse from '../pages/ErrorResponse/ErrorResponse';
import Forms from '../pages/Forms/Forms';

export const pagesForRoutes = [
  { path: '/', page: <Layout /> },
  { path: 'index', page: <Main /> },
  { path: 'about-us', page: <AboutUs /> },
  { path: 'forms', page: <Forms /> },
  { path: '*', page: <ErrorResponse /> },
];
