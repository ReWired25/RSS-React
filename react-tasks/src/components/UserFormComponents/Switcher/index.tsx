import React from 'react';

class Switcher extends React.Component {
  render() {
    return (
      <div className="switcher-container">
        <p className="switcher-text">Receive / Don&apos;t recieve notifications</p>
        <label className="input-switcher">
          <input className="switcher-input" type="checkbox" name="inputSwitcher" />
          <span className="switcher-slider"></span>
        </label>
      </div>
    );
  }
}

export default Switcher;
