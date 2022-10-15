import React from 'react';
import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';

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
