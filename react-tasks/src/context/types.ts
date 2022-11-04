import React from 'react';

import { ISearchAction } from './SearchState/types';
import { IMainState, IMainAction } from './MainState/types';
import { IFormState, IFormAction } from './FormState/types';
import { ICharacterState, ICharacterAction } from './CharacterState/types';

export interface IAppContext {
  SearchState: { value: string };
  MainState: IMainState;
  FormState: IFormState;
  CharacterState: ICharacterState;
  FormDispatch: React.Dispatch<IFormAction>;
  SearchDispatch: React.Dispatch<ISearchAction>;
  MainDispatch: React.Dispatch<IMainAction>;
  CharacterDispatch: React.Dispatch<ICharacterAction>;
}
