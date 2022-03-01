import { LIMIT } from '../../utils/data';
import hackerNewsApi from '../hnApi';
import { showNotification } from './app';

export const FETCH_IDS_REQUEST = 'FETCH_IDS_REQUEST';
export const FETCH_IDS_SUCCESS = 'FETCH_IDS_SUCCESS';
export const FETCH_IDS_FAILURE = 'FETCH_IDS_FAILURE';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const SET_ITEMS = 'SET_ITEMS';
export const ADD_ITEMS = 'ADD_ITEMS';
export const SET_IDS = 'SET_IDS';

export const getIds = () => {
  return (dispatch) => {
    dispatch(fetchIdsRequest());
    hackerNewsApi.getNewItemIds().then((ids) => {
      dispatch(fetchIdsSuccess());
      dispatch(setIds(ids));
    }).catch(err => {
      dispatch(fetchIdsFailure());
      dispatch(showNotification('Something went wrong. Try again later!'))
    });
  };
};

export const getItems = (ids) => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());

    const itemPromises = ids.map(id => hackerNewsApi.getItem(id));
    Promise.all(itemPromises).then(data => {
      dispatch(addItems(data));
      dispatch(fetchItemsSuccess());
    }).catch(err => {
      dispatch(fetchItemsFailure());
      dispatch(showNotification('Something went wrong. Try again later!'))
    });
  };
};

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};

export const fetchItemsSuccess = () => {
  return {
    type: FETCH_ITEMS_SUCCESS,
  };
};

export const fetchItemsFailure = () => {
  return {
    type: FETCH_ITEMS_FAILURE,
  };
};

export const setItems = (data) => {
  return {
    type: SET_ITEMS,
    payload: data,
  };
};

export const addItems = (data) => {
  return {
    type: ADD_ITEMS,
    payload: data,
  };
};

export const fetchIdsRequest = () => {
  return {
    type: FETCH_IDS_REQUEST,
  };
};

export const fetchIdsSuccess = () => {
  return {
    type: FETCH_IDS_SUCCESS,
  };
};

export const fetchIdsFailure = () => {
  return {
    type: FETCH_IDS_FAILURE,
  };
};

export const setIds = (data) => {
  return {
    type: SET_IDS,
    payload: data.slice(0, LIMIT),
  };
};
