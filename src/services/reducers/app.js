import {SET_MESSAGE} from '../actions/app';

const initialState = {
  error: false,
  loader: false,
  message: '',
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export {appReducer};