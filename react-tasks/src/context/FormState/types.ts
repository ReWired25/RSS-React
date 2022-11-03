import { FieldValues } from 'react-hook-form';
import { InewData } from 'components/UserFormComponents/UserForm/types';

export interface IFormState {
  formData: FieldValues;
  formCards: InewData[];
}

export interface IFormAction {
  type: string;
  payload: FieldValues | InewData[];
}

export enum FormActionCase {
  changeData = 'changeData',
  changeCards = 'changeCards',
}
