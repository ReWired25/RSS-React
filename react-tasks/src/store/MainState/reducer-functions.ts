import { IMainState, Page } from './types';

export const changePageMaxResults = (state: IMainState, move: Page) => {
  if (!state.data?.info[move]) return;
  let currentApiPage: string;
  let currentViewPage: string;

  if (move === Page.prevPage) {
    currentApiPage = (+state.apiPage - Page.step).toString();
    currentViewPage = (+state.viewPage - Page.step).toString();
  } else {
    currentApiPage = (+state.apiPage + Page.step).toString();
    currentViewPage = (+state.viewPage + Page.step).toString();
  }

  return { currentApiPage, currentViewPage };
};

export const changePageMinResults = (state: IMainState, move: Page) => {
  if (!state.data) return;
  let currentViewPage: string;
  let currentApiPage: string | null = null;

  if (move === Page.prevPage) {
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

  return { currentApiPage, currentViewPage };
};
