import { IMainState, Page, MainActionCase } from './types';

export const changePageMaxResults = (state: IMainState, move: string) => {
  if (!state.data?.info[move]) return state;
  let currentPage: string;
  let currentViewPage: string;

  if (move === MainActionCase.prevPage) {
    currentPage = (+state.apiPage - Page.step).toString();
    currentViewPage = (+state.viewPage - Page.step).toString();
  } else {
    currentPage = (+state.apiPage + Page.step).toString();
    currentViewPage = (+state.viewPage + Page.step).toString();
  }

  return { ...state, apiPage: currentPage, viewPage: currentViewPage };
};

export const changePageMinResults = (state: IMainState, move: string) => {
  if (!state.data) return state;
  let currentViewPage: string;
  let currentApiPage: string | null = null;

  if (move === MainActionCase.prevPage) {
    currentViewPage = (+state.viewPage - Page.step).toString();
    if (+state.viewPage % 2 !== 0) {
      currentApiPage = (+state.apiPage - Page.step).toString();
    }
  } else {
    currentViewPage = (+state.viewPage + Page.step).toString();
    if (+state.viewPage % 2 === 0) {
      currentApiPage = (+state.apiPage + Page.step).toString();
    }
  }

  return currentApiPage
    ? { ...state, viewPage: currentViewPage, apiPage: currentApiPage }
    : { ...state, viewPage: currentViewPage };
};
