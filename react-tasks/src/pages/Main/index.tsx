import React, { useEffect, useContext, useCallback } from 'react';

import { AppContext } from 'context';
import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';
import LoadIndicator from 'components/LoadIndicator';
import ErrorMessage from 'components/ErrorMessage';
import PageSettings from 'components/PageSettings';
import Pagination from 'components/Pagination';

import {
  URL,
  Response,
  MainActionCase,
  Page,
  TotalResults,
  IdataResult,
} from '../../context/MainState/types';

const Main = () => {
  const AppState = useContext(AppContext);
  const { MainState, MainDispatch } = AppState;

  const handleCurrentResults = useCallback(
    (results: IdataResult[]) => {
      if (MainState.resultsOnPage === Page.maxResults) return results;

      return +MainState.viewPage % 2 !== 0
        ? results.slice(TotalResults.start, TotalResults.end)
        : results.slice(TotalResults.end);
    },
    [MainState.resultsOnPage, MainState.viewPage]
  );

  useEffect(() => {
    const dataRequest = async () => {
      try {
        const response = await fetch(
          URL.link + MainState.apiPage + URL.queryName + MainState.query
        );
        if (response.status === Response.notFoundStatus) {
          throw new Error(Response.notFoundMessage);
        }

        const data = await response.json();
        const currentResults = handleCurrentResults(data.results);
        const dataState = { data: data, currentResults: currentResults, isLoading: false };

        MainDispatch({ type: MainActionCase.results, resultsState: dataState });
      } catch {
        const dataState = { requestError: true, isLoading: false };
        MainDispatch({ type: MainActionCase.results, resultsState: dataState });
      }
    };
    dataRequest();
  }, [MainDispatch, MainState.apiPage, MainState.query, handleCurrentResults]);

  return (
    <div className="main">
      <SearchBar />
      <PageSettings />
      {MainState.isLoading && <LoadIndicator />}
      {MainState.requestError && <ErrorMessage message={Response.notFoundMessage as string} />}
      {!MainState.isLoading && !MainState.requestError && MainState.currentResults && (
        <>
          <AllCards data={MainState.currentResults} />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Main;
