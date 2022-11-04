import { ICharacterState, ICharacterAction } from './types';

export const CharacterReducer = (state: ICharacterState, action: ICharacterAction) => {
  return { ...state, CharacterData: action.newData };
};
