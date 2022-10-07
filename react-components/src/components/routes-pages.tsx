import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { IRoutesPagesProps } from 'types/interfaces';

class RoutesPages extends React.Component<IRoutesPagesProps> {
  handlePage(path: string, page: JSX.Element) {
    if (path === 'index') {
      return <Route key={path} index element={page} />;
    }

    return <Route key={path} path={path} element={page} />;
  }

  render() {
    return (
      <Routes>
        <Route path={this.props.layoutPage.path} element={this.props.layoutPage.page}>
          {this.props.pages.map(({ path, page }) => {
            return this.handlePage(path, page);
          })}
        </Route>
      </Routes>
    );
  }
}

export default RoutesPages;
