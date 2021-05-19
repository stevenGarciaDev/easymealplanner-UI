import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
    [selectUser],
    (user) => user.token
);