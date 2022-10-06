import React from 'react';
import SearchBar from 'components/search-bar';
import AllCards from 'components/all-cards';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <p>~~~~~</p>
        <p>~~~~~</p>
        <h2>Main page content</h2>
        <p>~~~~~</p>
        <p>~~~~~</p>
        <AllCards />
      </div>
    );
  }
}

export default Main;
