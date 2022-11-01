import React from 'react';

import { ISearchAction } from './SearchState/types';
import { IMainState, IMainAction } from './MainState/types';

export interface IAppContext {
  SearchState: { value: string };
  MainState: IMainState;
  SearchDispatch: React.Dispatch<ISearchAction>;
  MainDispatch: React.Dispatch<IMainAction>;
}
