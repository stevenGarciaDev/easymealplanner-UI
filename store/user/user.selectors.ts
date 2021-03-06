import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
    [selectUser],
    (user) => user.token
);

export const selectUserId = createSelector(
    [selectUser],
    (user) => user.id
);

export const selectUserName = createSelector(
    [selectUser],
    (user) => user.username
);

export const selectUserErrorMessage = createSelector(
    [selectUser],
    (user) => user.errorMessage
);

