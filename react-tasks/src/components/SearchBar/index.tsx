import React, { ChangeEvent } from 'react';
import { setStorage, getStorage } from 'localStorage';

import { ISearchBarProps, ISearchBarState, SearchSubmit } from './types';

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
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

  handleChange(e: ChangeEvent) {
    const searchInput = e.target as HTMLInputElement;
    this.setState({ value: searchInput.value });
    setStorage(searchInput.value);
  }

  handleSearchSubmit(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!this.state) return;
    if (e.key === SearchSubmit.key) {
      this.props.onDataChange(this.state.value);
    }
  }

  render() {
    return (
      <input
        className="search-bar"
        name="search"
        type="search"
        placeholder="search..."
        onKeyUp={(e) => this.handleSearchSubmit(e)}
        onChange={(e) => this.handleChange(e)}
        value={this.state ? this.state.value : ''}
      />
    );
  }
}

export default SearchBar;
