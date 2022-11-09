export interface Ifields {
  [index: string]: string | number | Record<string, string>;
}

export enum fieldsValues {
  colonAndSpace = ': ',
  image = 'Character image',
}

export enum characterDataError {
  errorMessage = 'Something went wrong with the character data! Try to go back to main and update the app!',
}
