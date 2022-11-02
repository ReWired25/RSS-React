import React, { useContext } from 'react';

import { AppContext } from 'context';

import { MainActionCase, Page } from 'context/MainState/types';

const Pagination = () => {
  const AppState = useContext(AppContext);
  const { MainState, MainDispatch } = AppState;

  const handlePage = (move: string) => {
    MainDispatch({ type: move });
  };

  const handleViewAllPage = () => {
    if (!MainState.data) return;
    return MainState.resultsOnPage === Page.maxResults
      ? MainState.data?.info.pages
      : MainState.data?.info.pages * Page.allPagesMultiplier;
  };

  return (
    <div className="pagination-container">
      <button
        className="prev-button page-button"
        onClick={() => handlePage(MainActionCase.prevPage)}
        disabled={MainState.viewPage === '1' ? true : false}
      >
        Prev
      </button>
      <p className="page-view">{`${MainState.viewPage} / ${handleViewAllPage()}`}</p>
      <button
        className="next-button page-button"
        onClick={() => handlePage(MainActionCase.nextPage)}
        disabled={+MainState.viewPage === MainState.data?.info.pages ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
