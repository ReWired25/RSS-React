import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavigationProps } from './types';

class Navigation extends React.Component<INavigationProps> {
  handleLink(path: string, name: string) {
    return (
      <li key={name}>
        <NavLink className="nav-link" to={path} end={path === '/' ? true : false}>
          {name}
        </NavLink>
      </li>
    );
  }

  render() {
    return (
      <nav>
        <ul className="nav-links">
          {this.props.links.map(({ path, name }) => this.handleLink(path, name))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
