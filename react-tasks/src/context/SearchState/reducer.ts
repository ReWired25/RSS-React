import { ISearchState, ISearchAction } from './types';

export const SearchReducer = (state: ISearchState, action: ISearchAction) => {
  if (state.value !== action.inputValue) return { ...state, value: action.inputValue };
  else return state;
};
