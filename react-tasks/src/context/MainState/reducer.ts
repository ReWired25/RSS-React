import { changePageMaxResults, changePageMinResults } from './reducer-functions';

import { IMainState, IMainAction, URL, Page, MainActionCase } from './types';

export const MainReducer = (state: IMainState, action: IMainAction) => {
  switch (action.type) {
    case MainActionCase.results:
      if (!action.resultsState) return state;
      return { ...state, ...action.resultsState };
    case MainActionCase.minResults:
      return { ...state, resultsOnPage: Page.minResults, apiPage: URL.page, viewPage: URL.page };
    case MainActionCase.maxResults:
      return { ...state, resultsOnPage: Page.maxResults, apiPage: URL.page, viewPage: URL.page };
    case MainActionCase.nextPage:
      return state.resultsOnPage === Page.minResults
        ? changePageMinResults(state, MainActionCase.nextPage)
        : changePageMaxResults(state, MainActionCase.nextPage);
    case MainActionCase.prevPage:
      return state.resultsOnPage === Page.minResults
        ? changePageMinResults(state, MainActionCase.prevPage)
        : changePageMaxResults(state, MainActionCase.prevPage);
    case MainActionCase.sortDefault:
      return { ...state, currentSorting: MainActionCase.sortDefault };
    case MainActionCase.sortDesc:
      return { ...state, currentSorting: MainActionCase.sortDesc };
    case MainActionCase.sortAsc:
      return { ...state, currentSorting: MainActionCase.sortAsc };
    default:
      return state;
  }
};
