import { IdataResult } from 'context/MainState/types';

export interface ICharacterState {
  CharacterData: IdataResult;
}

export interface ICharacterAction {
  newData: IdataResult;
}
