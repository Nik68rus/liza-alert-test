import {
  SET_ERROR, 
  SET_MESSAGE, 
  SHOW_LOADER, 
  HIDE_LOADER
} from './app';


export const showLoader = () => {
  return {
    type: SHOW_LOADER
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER
  }
}

export const setError = () => {
  return {
    type: SET_ERROR,
  }
}

export const setMessage = (data) => {
  return {
    type: SET_MESSAGE,
    payload: data,
  }
}

