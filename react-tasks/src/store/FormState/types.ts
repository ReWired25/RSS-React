import { FieldValues } from 'react-hook-form';
import { IformData, InewData } from 'components/UserFormComponents/UserForm/types';

export interface IFormState {
  formData: FieldValues;
  formCards: InewData[];
}

export interface IFormActionPayload {
  FormData: IformData;
  buttonActive: boolean;
  submitStatus: boolean;
  newCard?: InewData;
}

export interface IFormAction {
  type: string;
  payload: IFormActionPayload;
}

export enum FormActionCase {
  changeData = 'changeData',
  changeCards = 'changeCards',
}
