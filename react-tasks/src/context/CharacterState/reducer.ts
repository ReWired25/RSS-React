import { ICharacterState, ICharacterAction, CharacterActionCase } from './types';

export const CharacterReducer = (state: ICharacterState, action: ICharacterAction) => {
  if (action.type === CharacterActionCase.changeData) {
    return { ...state, CharacterData: action.newData };
  }
  return state;
};
