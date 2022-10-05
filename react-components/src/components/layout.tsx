import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <>
        <header className="header">
          <NavLink className="nav-link" to="/" end>
            Main
          </NavLink>

          <NavLink className="nav-link" to="/about-us">
            About Us
          </NavLink>
        </header>

        <Outlet />
      </>
    );
  }
}

export default Layout;
