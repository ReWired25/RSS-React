import React from 'react';
import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';
import LoadInicator from 'components/LoadIndicator';
import ErrorMessage from 'components/ErrorMessage';

import { IMainState, URL, Response } from './types';

class Main extends React.Component<Record<string, string>, IMainState> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      data: null,
      query: URL.queryinitial,
      isLoading: true,
      isUpdated: true,
      requestError: false,
    };
  }

  componentDidMount() {
    this.dataRequest();
  }

  componentDidUpdate() {
    if (!this.state.isUpdated) return;
    this.dataRequest();
  }

  async dataRequest() {
    try {
      const response = await fetch(URL.link + this.state.query);
      if (response.status === Response.notFoundStatus) {
        throw new Error(Response.notFoundMessage);
      }
      const results = await response.json();
      this.setState({ data: results, isLoading: false, isUpdated: false });
      console.log(results);
    } catch {
      this.setState({ requestError: true, isLoading: false, isUpdated: false });
    }
  }

  handleDataChange(searchInput: string) {
    if (searchInput !== this.state.query) {
      this.setState({ query: searchInput, isLoading: true, isUpdated: true, requestError: false });
    }
  }

  render() {
    return (
      <div>
        <SearchBar onDataChange={this.handleDataChange.bind(this)} />
        {this.state.isLoading ? (
          <LoadInicator />
        ) : this.state.requestError ? (
          <ErrorMessage message={Response.notFoundMessage as string} />
        ) : (
          this.state.data && <AllCards data={this.state.data.results} />
        )}
      </div>
    );
  }
}

export default Main;
