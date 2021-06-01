import { LoadingActionTypes } from './loading.types';

const INITIAL_STATE = {
  isLoading: false,
};

export const loaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoadingActionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LoadingActionTypes.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
