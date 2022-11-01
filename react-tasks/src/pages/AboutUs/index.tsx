import React, { useContext } from 'react';

import { AboutInfo } from './types';

import { TestContext, Icontext } from 'App';

const AboutUs = () => {
  const context = useContext(TestContext) as Icontext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value) return context.dispatch({ type: 'clear' });
    if (isNaN(+value)) return context.dispatch({ type: 'str' });
    if (typeof +value === 'number') return context.dispatch({ type: 'num' });
  };

  return (
    <>
      <p className="about-page-info">
        {AboutInfo.text}
        <a className="about-page-link" href="https://leonardo.ru" target="_blank" rel="noreferrer">
          {AboutInfo.aboutUrl}
        </a>
      </p>
      <button onClick={() => console.log(context.state.value)}>show context</button>
      <input type="text" onChange={(e) => handleInputChange(e)} />
    </>
  );
};

export default AboutUs;
