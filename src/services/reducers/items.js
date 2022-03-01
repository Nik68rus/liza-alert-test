import { SET_ITEMS, SET_IDS, FETCH_IDS_REQUEST, FETCH_IDS_SUCCESS, FETCH_IDS_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, ADD_ITEMS } from "../actions/items";

const initialState = {
  idsRequested: false,
  idsLoaded: false,
  idsFailed: false,
  idsList: [],

  itemsRequested: false,
  itemsLoaded: false,
  itemsFailed: false,
  itemsList: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequested: true,
        itemsLoaded: false,
        itemsFailed: false,
      }
    }
    case FETCH_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsRequested: false,
        itemsLoaded: true,
        itemsFailed: false,
      }
    }
    case FETCH_ITEMS_FAILURE: {
      return {
        ...state,
        itemsRequested: false,
        itemsLoaded: false,
        itemsFailed: true,
      }
    }
    case SET_ITEMS: {
      return {
        ...state,
        itemsList: action.payload,
      }
    }
    case ADD_ITEMS: {
      return {
        ...state,
        itemsList: [...state.itemsList, ...action.payload],
      }
    }
    case FETCH_IDS_REQUEST: {
      return {
        ...state,
        idsRequested: true,
        idsLoaded: false,
        idsFailed: false,
      }
    }
    case FETCH_IDS_SUCCESS: {
      return {
        ...state,
        idsRequested: false,
        idsLoaded: true,
        idsFailed: false,
      }
    }
    case FETCH_IDS_FAILURE: {
      return {
        ...state,
        idsRequested: false,
        idsLoaded: false,
        idsFailed: true,
      }
    }
    case SET_IDS: {
      return {
        ...state,
        idsList: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}

export {itemsReducer};