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

  const handleResultsSorting = useCallback(
    (results: IdataResult[]) => {
      if (MainState.currentSorting === MainActionCase.sortDefault) return results;

      const sortedResults = results.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

      return MainState.currentSorting === MainActionCase.sortAsc
        ? sortedResults
        : sortedResults.reverse();
    },
    [MainState.currentSorting]
  );

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
        const dataResults = handleCurrentResults(data.results);
        const currentResults = handleResultsSorting(dataResults);
        const dataState = { data: data, currentResults: currentResults, isLoading: false };

        MainDispatch({ type: MainActionCase.results, resultsState: dataState });
      } catch {
        const dataState = { requestError: true, isLoading: false };
        MainDispatch({ type: MainActionCase.results, resultsState: dataState });
      }
    };
    dataRequest();
  }, [
    MainDispatch,
    MainState.apiPage,
    MainState.query,
    handleCurrentResults,
    handleResultsSorting,
  ]);

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
