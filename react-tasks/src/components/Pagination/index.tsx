import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'store/types';
import { Page } from 'store/MainState/types';
import { changePage } from 'store/MainState/reducer';

const Pagination = () => {
  const { MainState } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handlePage = (move: Page) => {
    dispatch(changePage(move));
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
        onClick={() => handlePage(Page.prevPage)}
        disabled={MainState.viewPage === '1' ? true : false}
      >
        Prev
      </button>
      <p className="page-view">{`${MainState.viewPage} / ${handleViewAllPage()}`}</p>
      <button
        className="next-button page-button"
        onClick={() => handlePage(Page.nextPage)}
        disabled={+MainState.viewPage === MainState.data?.info.pages ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
