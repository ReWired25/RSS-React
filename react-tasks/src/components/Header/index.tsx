import React from 'react';

import Navigation from '../Navigation';

import { NavigationLinks } from 'constants/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navigation links={NavigationLinks} />
    </header>
  );
};

export default Header;
