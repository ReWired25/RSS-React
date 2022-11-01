import { IMainState, IMainAction, Page, MainActionCase } from './types';

export const MainReducer = (state: IMainState, action: IMainAction) => {
  switch (action.type) {
    case MainActionCase.results:
      if (!action.resultsState) return state;
      return { ...state, ...action.resultsState };
    case MainActionCase.nextPage:
      if (!state.data?.info.next) return state;
      const nextPage = (+state.page + Page.step).toString();
      return { ...state, page: nextPage };
    case MainActionCase.prevPage:
      if (!state.data?.info.prev) return state;
      const prevPage = (+state.page - Page.step).toString();
      return { ...state, page: prevPage };
    default:
      return state;
  }
};
