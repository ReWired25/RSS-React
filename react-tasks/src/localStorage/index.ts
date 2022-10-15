import { Storage } from './types';

export const setStorage = (value: string): void => {
  const key = Storage.key;

  localStorage.setItem(key, value);
};

export const getStorage = () => {
  const value = localStorage.getItem(Storage.key);

  return value;
};
