import { LoadingActionTypes } from './loading.types';

export const startLoadingAnimation = () => ({
  type: LoadingActionTypes.START_LOADING,
});

export const stopLoadingAnimation = () => ({
  type: LoadingActionTypes.STOP_LOADING,
});