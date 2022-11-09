import { createSlice } from '@reduxjs/toolkit';

import { initFormState } from '.';

import { IFormAction } from './types';

export const FormSlice = createSlice({
  name: 'FormReducer',
  initialState: initFormState,
  reducers: {
    changeFormState: (state, action: IFormAction) => {
      const { newCard, FormData, buttonActive, submitStatus } = action.payload;

      if (newCard) {
        state.formCards.push(newCard);
      }

      state.formData = FormData;
      state.buttonActive = buttonActive;
      state.submitStatus = submitStatus;
    },
  },
});

export const { changeFormState } = FormSlice.actions;
export default FormSlice.reducer;
