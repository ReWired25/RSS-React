import { IdataResult } from 'store/MainState/types';

export interface ICharacterState {
  CharacterData: IdataResult | null;
}

export interface ICharacterAction {
  type: string;
  payload: IdataResult;
}

export enum CharacterActionCase {
  changeData = 'changeData',
}
