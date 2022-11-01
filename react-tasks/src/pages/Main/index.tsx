import React, { useEffect, useContext } from 'react';

import { AppContext } from 'context';
import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';
import LoadIndicator from 'components/LoadIndicator';
import ErrorMessage from 'components/ErrorMessage';
import Pagination from 'components/Pagination';

import { URL, Response, MainActionCase } from '../../context/MainState/types';

const Main = () => {
  const AppState = useContext(AppContext);
  const { MainState, MainDispatch } = AppState;

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const response = await fetch(URL.link + MainState.page + URL.queryName + MainState.query);
        if (response.status === Response.notFoundStatus) {
          throw new Error(Response.notFoundMessage);
        }
        const results = await response.json();
        const resultsState = { data: results, isLoading: false };
        console.log(results);
        MainDispatch({ type: MainActionCase.results, resultsState: resultsState });
      } catch {
        const resultsState = { requestError: true, isLoading: false };
        MainDispatch({ type: MainActionCase.results, resultsState: resultsState });
      }
    };
    dataRequest();
  }, [MainDispatch, MainState.page, MainState.query]);

  return (
    <div className="main">
      <SearchBar />
      {MainState.isLoading && <LoadIndicator />}
      {MainState.requestError && <ErrorMessage message={Response.notFoundMessage as string} />}
      {!MainState.isLoading && !MainState.requestError && MainState.data && (
        <>
          <AllCards data={MainState.data.results} />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Main;
