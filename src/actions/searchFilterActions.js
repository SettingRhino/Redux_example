export const SET_FILTER = "searchFilter/SET_FILTER";
export const RESET_FILTER = "searchFilter/RESET_FILTER";

export const setFilter = (fileName, value) => ({
  type: SET_FILTER,
  payload: { fileName, value }
});
export const resetFilter = () => ({
  type: RESET_FILTER
});
