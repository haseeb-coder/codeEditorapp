import { PayloadAction } from '@reduxjs/toolkit';

import darkModeReducer, { initialState, toggleDarkMode } from './reducer';

describe('dark mode reducer', () => {
  test('should return the intial state if no  know action  is provided', () => {
    expect(darkModeReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });

  test('should enable dark mode if it is disabled', () => {
    expect(darkModeReducer(false, toggleDarkMode)).toEqual(true);
  });

  test('should disabel  dark mode if it is enabeld', () => {
    expect(darkModeReducer(true, toggleDarkMode)).toEqual(false);
  });
});
