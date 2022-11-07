import { IdataResult } from 'context/MainState/types';

export interface ICharacterState {
  CharacterData: IdataResult;
}

export interface ICharacterAction {
  type: string;
  newData: IdataResult;
}

export enum CharacterActionCase {
  changeData = 'changeData',
}
