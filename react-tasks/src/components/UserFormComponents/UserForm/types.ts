export interface InewData {
  [index: string]: string;
  name: string;
  surname: string;
  date: string;
  country: string;
  switcher: string;
  picture: string;
}

export interface IUserFormProps {
  onChange: (newData: InewData) => void;
}

export interface IUserFormState {
  errorsState: HTMLInputElement[];
  isSubmitButtonDisabled: boolean;
  isSubmitSuccess: boolean;
}

export interface IFormsInputs {
  inputName: HTMLInputElement;
  inputSurname: HTMLInputElement;
  inputDate: HTMLInputElement;
  selectCountry: HTMLSelectElement;
  inputSwitcher: HTMLInputElement;
  inputCheckbox: HTMLInputElement;
  inputFile: HTMLInputElement;
  submitButton: HTMLButtonElement;
}

export enum Picture {
  index = 0,
}

export enum Notifications {
  true = 'With notifications',
  false = 'Without notifications',
}

export enum Initial {
  country = 'France',
}

export enum Clear {
  input = '',
}