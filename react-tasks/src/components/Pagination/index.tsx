import React, { useContext } from 'react';

import { AppContext } from 'context';

import { MainActionCase } from 'context/MainState/types';

const Pagination = () => {
  const AppState = useContext(AppContext);
  const { MainState, MainDispatch } = AppState;

  const handlePage = (move: string) => {
    MainDispatch({ type: move });
  };

  return (
    <div className="pagination-container">
      <button
        className="prev-button page-button"
        onClick={() => handlePage(MainActionCase.prevPage)}
        disabled={MainState.page === '1' ? true : false}
      >
        Prev
      </button>
      <p className="page-view">{`${MainState.page} / ${MainState.data?.info.pages}`}</p>
      <button
        className="next-button page-button"
        onClick={() => handlePage(MainActionCase.nextPage)}
        disabled={+MainState.page === MainState.data?.info.pages ? true : false}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
