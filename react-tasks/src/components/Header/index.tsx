import React from 'react';

import Navigation from '../Navigation';

import { NAVIGATION_LINKS } from 'constants/Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navigation links={NAVIGATION_LINKS} />
    </header>
  );
};

export default Header;
