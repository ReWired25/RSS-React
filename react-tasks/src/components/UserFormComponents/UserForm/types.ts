export interface IformData {
  [index: string]: string | boolean | undefined | FileList;
  name: string;
  surname: string;
  date: string;
  country: string;
  switcher: boolean;
  checkbox: boolean;
  file?: FileList;
}

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

export enum HandleField {
  file = 'file',
}

export enum Picture {
  index = 0,
}

export enum Notifications {
  true = 'With notifications',
  false = 'Without notifications',
}

export enum Initial {
  countryField = 'country',
  country = 'France',
}
