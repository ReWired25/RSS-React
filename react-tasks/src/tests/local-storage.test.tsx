import '@testing-library/react';

import { setStorage, getStorage } from 'localStorage';

describe('local storage', () => {
  const mockFn: Record<string, jest.SpyInstance> = {};

  beforeEach(() => {
    mockFn.setMock = jest.spyOn(Storage.prototype, 'setItem');
    mockFn.getMock = jest.spyOn(Storage.prototype, 'getItem');
  });

  test('read and write local storage', () => {
    const testKey = 'local';
    const testValue = 'test';

    localStorage.setItem(testKey, testValue);
    const getTestValue = localStorage.getItem(testKey);

    expect(getTestValue).toEqual(testValue);
    expect(mockFn.setMock).toHaveBeenCalledTimes(1);
    expect(mockFn.getMock).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    Object.keys(mockFn).forEach((fn) => mockFn[fn].mockRestore());
  });
});

describe('local storage', () => {
  test('read and write app storage functions', () => {
    const testValue = 'test';

    const Storage = {
      set: setStorage,
      get: getStorage,
    };

    const setMock = jest.spyOn(Storage, 'set');
    const getMock = jest.spyOn(Storage, 'get');

    Storage.set(testValue);
    const getTestValue = Storage.get();

    expect(getTestValue).toEqual(testValue);
    expect(setMock).toHaveBeenCalledTimes(1);
    expect(getMock).toHaveBeenCalledTimes(1);
  });
});
