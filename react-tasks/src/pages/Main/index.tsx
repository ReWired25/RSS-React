import React, { useState, useEffect } from 'react';

import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';
import LoadIndicator from 'components/LoadIndicator';
import ErrorMessage from 'components/ErrorMessage';

import { IMainState, URL, Response } from './types';

const Main = () => {
  const [state, setState] = useState<IMainState>({
    data: null,
    query: URL.queryinitial,
    isLoading: true,
    isUpdated: true,
    requestError: false,
  });

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const response = await fetch(URL.link + state.query);
        if (response.status === Response.notFoundStatus) {
          throw new Error(Response.notFoundMessage);
        }
        const results = await response.json();
        setState((state) => ({ ...state, data: results, isLoading: false, isUpdated: false }));
      } catch {
        setState((state) => ({ ...state, requestError: true, isLoading: false, isUpdated: false }));
      }
    };
    dataRequest();
  }, [state.isUpdated, state.query]);

  const handleDataChange = (searchInput: string) => {
    if (searchInput !== state.query) {
      setState({
        ...state,
        query: searchInput,
        isLoading: true,
        isUpdated: true,
        requestError: false,
      });
    }
  };

  return (
    <div className="main">
      <SearchBar onDataChange={handleDataChange} />
      {state.isLoading && <LoadIndicator />}
      {state.requestError && <ErrorMessage message={Response.notFoundMessage as string} />}
      {!state.isLoading && !state.requestError && state.data && (
        <AllCards data={state.data.results} />
      )}
    </div>
  );
};

export default Main;
