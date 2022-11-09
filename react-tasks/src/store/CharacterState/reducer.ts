import { createSlice } from '@reduxjs/toolkit';

import { initCharacterState } from '.';

import { ICharacterAction } from './types';

export const CharacterSlice = createSlice({
  name: 'CharacterReducer',
  initialState: initCharacterState,
  reducers: {
    changeCharacterData: (state, action: ICharacterAction) => {
      state.CharacterData = action.payload;
    },
  },
});

export const { changeCharacterData } = CharacterSlice.actions;
export default CharacterSlice.reducer;
