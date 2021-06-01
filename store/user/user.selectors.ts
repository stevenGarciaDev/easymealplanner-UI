import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
    [selectUser],
    (user) => user.token
);

export const selectUserErrorMessage = createSelector(
    [selectUser],
    (user) => user.errorMessage
);