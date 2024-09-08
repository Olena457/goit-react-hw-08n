export const selectUser = state => state.auth.user;

export const selectAuth = state => state.auth;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectLoading = state => state.auth.loading;

export const selectError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing; //додала рефреш
