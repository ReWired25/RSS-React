import { IdataResult } from 'store/MainState/types';

export interface ICharacterState {
  CharacterData: IdataResult;
}

export interface ICharacterAction {
  type: string;
  payload: IdataResult;
}

export enum CharacterActionCase {
  changeData = 'changeData',
}
