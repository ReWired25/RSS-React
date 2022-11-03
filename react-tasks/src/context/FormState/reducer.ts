import { FieldValues } from 'react-hook-form';
import { InewData } from 'components/UserFormComponents/UserForm/types';
import { IFormState, IFormAction, FormActionCase } from './types';

export const FormReducer = (state: IFormState, action: IFormAction) => {
  switch (action.type) {
    case FormActionCase.changeData:
      return { ...state, formData: action.payload as FieldValues };
    case FormActionCase.changeCards:
      return { ...state, formCards: action.payload as InewData[] };
    default:
      return state;
  }
};
