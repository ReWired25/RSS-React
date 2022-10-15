import React from 'react';

import Navigation from '../Navigation';
import { NavigationLinks } from 'constants/Navigation';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Navigation links={NavigationLinks} />
      </header>
    );
  }
}

export default Header;
