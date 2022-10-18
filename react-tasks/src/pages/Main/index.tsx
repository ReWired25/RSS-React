import React from 'react';
import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';

import { IMainState } from './types';

class Main extends React.Component<Record<string, string>, IMainState> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character/?name=');
    const results = await response.json();
    console.log(results);
    this.setState({ data: results });
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.data && <AllCards data={this.state.data.results} />}
      </div>
    );
  }
}

export default Main;
