import React from 'react';

import { characterTestData, charactersTestResults, formTestData } from './data';

import { ISearchAction } from 'context/SearchState/types';
import { IMainAction, Page } from 'context/MainState/types';
import { IFormAction } from 'context/FormState/types';
import { ICharacterAction } from 'context/CharacterState/types';

const SearchState = {
  value: '',
};

export const dataInfo = {
  count: 20,
  next: null,
  pages: 1,
  prev: null,
};

const MainState = {
  data: { info: dataInfo, results: charactersTestResults },
  currentResults: charactersTestResults,
  apiPage: '1',
  viewPage: '1',
  query: '',
  isLoading: true,
  requestError: false,
  resultsOnPage: Page.maxResults,
  currentSorting: 'DEFAULT',
};

const FormData = {
  name: 'Super',
  surname: 'Franc',
  date: '25.05.2025',
  country: 'France',
  switcher: true,
  checkbox: true,
  file: {} as FileList,
};

const FormState = {
  formData: FormData,
  formCards: [formTestData],
};

const CharacterState = {
  CharacterData: characterTestData,
};

const SearchDispatch: React.Dispatch<ISearchAction> = (action: ISearchAction) => action;
const MainDispatch: React.Dispatch<IMainAction> = (action: IMainAction) => action;
const FormDispatch: React.Dispatch<IFormAction> = (action: IFormAction) => action;
const CharacterDispatch: React.Dispatch<ICharacterAction> = (action: ICharacterAction) => action;

export const mockContextValue = {
  SearchState,
  MainState,
  FormState,
  CharacterState,
  SearchDispatch,
  MainDispatch,
  FormDispatch,
  CharacterDispatch,
};
