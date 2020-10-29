import * as types from './types';

export const darkMode = (payload) => {
  return {
    type: types.DARK_MODE,
    payload
  }
}

export const selectChord = (payload) => {
  return {
    type: types.SET_CURRENT_CHORD,
    payload
  }
}