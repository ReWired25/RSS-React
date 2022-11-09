import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from 'components/SearchBar';
import AllCards from 'components/AllCards';
import LoadIndicator from 'components/LoadIndicator';
import ErrorMessage from 'components/ErrorMessage';
import PageSettings from 'components/PageSettings';
import Pagination from 'components/Pagination';
import { dataRequest } from 'store/dataRequestApi';

import { RootState, AppDispatch } from 'store/types';
import { Response } from '../../store/MainState/types';

const Main = () => {
  const MainState = useSelector((state: RootState) => state.MainState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(dataRequest());
  }, [
    MainState.query,
    MainState.apiPage,
    MainState.viewPage,
    MainState.resultsOnPage,
    MainState.currentSorting,
    dispatch,
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
