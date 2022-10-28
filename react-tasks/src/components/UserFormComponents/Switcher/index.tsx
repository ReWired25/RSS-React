import React from 'react';

import { ISwitcherProps } from './types';

const Switcher = (props: ISwitcherProps) => {
  return (
    <div className="switcher-container">
      <p className="switcher-text">Receive / Don&apos;t recieve notifications</p>
      <label className="input-switcher">
        <input className="switcher-input" type="checkbox" {...props.register('switcher')} />
        <span className="switcher-slider"></span>
      </label>
    </div>
  );
};

export default Switcher;
