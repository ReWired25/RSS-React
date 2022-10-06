import React, { ChangeEvent } from 'react';
import { setStorage, getStorage } from 'local-storage';

import { ISearchBarState } from 'types/interfaces';

class SearchBar extends React.Component<Record<string, string>, ISearchBarState> {
  constructor(props: Record<string, string>) {
    super(props);
  }

  handleChange(e: ChangeEvent) {
    const bar = e.target as HTMLInputElement;

    this.setState({ value: bar.value });
    setStorage(bar.value);
  }

  componentDidMount() {
    const value = getStorage();

    if (!value) return;

    if (value) this.setState({ value: value });
  }

  componentWillUnmount() {
    if (!this.state) return;

    const value = this.state.value;

    setStorage(value);
  }

  render() {
    return (
      <input
        className="search-bar"
        name="search"
        type="search"
        placeholder="search..."
        onChange={(e) => {
          this.handleChange(e);
        }}
        value={this.state ? this.state.value : ''}
      ></input>
    );
  }
}

export default SearchBar;
