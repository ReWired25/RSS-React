import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavigationProps } from './types';

const Navigation = (props: INavigationProps) => {
  return (
    <nav>
      <ul className="nav-links">
        {props.links.map(({ path, name }, index) => (
          <li key={index}>
            <NavLink className="nav-link" to={path} end={path === '/' ? true : false}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
