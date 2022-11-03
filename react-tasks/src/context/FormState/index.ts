import { InewData } from 'components/UserFormComponents/UserForm/types';

export const initFormData = {
  name: '',
  surname: '',
  date: '',
  country: 'France',
  switcher: false,
  checkbox: false,
  file: {} as FileList,
};

export const initFormState = {
  formData: initFormData,
  formCards: [] as InewData[],
};
