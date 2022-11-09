import { IformData, InewData } from 'components/UserFormComponents/UserForm/types';

export const initFormData: IformData = {
  name: '',
  surname: '',
  date: '',
  country: 'France',
  switcher: false,
  checkbox: false,
};

export const initFormState = {
  formData: initFormData,
  formCards: [] as InewData[],
  buttonActive: true,
  submitStatus: false,
};
