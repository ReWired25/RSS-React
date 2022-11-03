import React from 'react';

import { ISearchAction } from './SearchState/types';
import { IMainState, IMainAction } from './MainState/types';
import { IFormState, IFormAction } from './FormState/types';

export interface IAppContext {
  SearchState: { value: string };
  MainState: IMainState;
  FormState: IFormState;
  FormDispatch: React.Dispatch<IFormAction>;
  SearchDispatch: React.Dispatch<ISearchAction>;
  MainDispatch: React.Dispatch<IMainAction>;
}
