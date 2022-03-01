export const SET_MESSAGE = 'SET_MESSAGE';

export const setMessage = (data) => ({
  type: SET_MESSAGE,
  payload: data,
})

export const showNotification = (message, duration = 3000) => {
  return (dispatch) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(setMessage(''));
    }, duration);
  }
};

