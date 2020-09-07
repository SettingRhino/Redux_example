export const SET_LOADING = "loading/SET_LOADING";
export const RESET_LOADING = "loading/RESET_LOADING";

export const setLoading = (loadingstatus) => ({
  type: SET_LOADING,
  payload: loadingstatus
});
export const resetLoading = () => ({
  type: RESET_LOADING
});
