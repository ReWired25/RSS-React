import React from 'react';

import { AboutInfo } from './types';

class AboutUs extends React.Component {
  render() {
    return (
      <p className="about-page-info">
        {AboutInfo.text}
        <a className="about-page-link" href="https://leonardo.ru" target="_blank" rel="noreferrer">
          {AboutInfo.aboutUrl}
        </a>
      </p>
    );
  }
}

export default AboutUs;