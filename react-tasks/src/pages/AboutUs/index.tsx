import React from 'react';

import { AboutInfo } from './types';

const AboutUs = () => {
  return (
    <>
      <p className="about-page-info">
        {AboutInfo.text}
        <a className="about-page-link" href={AboutInfo.aboutUrl} target="_blank" rel="noreferrer">
          {AboutInfo.linkText}
        </a>
      </p>
    </>
  );
};

export default AboutUs;
