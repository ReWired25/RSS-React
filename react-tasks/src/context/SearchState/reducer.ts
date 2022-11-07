import { ISearchState, ISearchAction, SearchActionCase } from './types';

export const SearchReducer = (state: ISearchState, action: ISearchAction) => {
  if (action.type === SearchActionCase.changeValue) {
    if (state.value !== action.inputValue) return { ...state, value: action.inputValue };
    else return state;
  }
  return state;
};
