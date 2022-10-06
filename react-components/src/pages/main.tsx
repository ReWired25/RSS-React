import React from 'react';
import SearchBar from 'components/search-bar';
import AllCards from 'components/all-cards';

class Main extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <AllCards />
      </div>
    );
  }
}

export default Main;
