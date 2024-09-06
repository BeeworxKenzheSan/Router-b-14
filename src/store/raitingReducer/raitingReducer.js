import { ACTION_TYPES } from "./raitingActions";

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export const raitingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTION_TYPES.GET: {
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    }
    case ACTION_TYPES.ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
  }
  return state;
};
