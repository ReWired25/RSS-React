import React from 'react';

import { ABOUT_INFO } from './types';

const AboutUs = () => {
  return (
    <>
      <p className="about-page-info">
        {ABOUT_INFO.text}
        <a className="about-page-link" href={ABOUT_INFO.aboutUrl} target="_blank" rel="noreferrer">
          {ABOUT_INFO.linkText}
        </a>
      </p>
    </>
  );
};

export default AboutUs;
