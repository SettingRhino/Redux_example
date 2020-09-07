import { SET_LOADING, RESET_LOADING } from "../actions/loadingActions";
const loading = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return payload;
    }
    case RESET_LOADING: {
      return false;
    }
    default: {
      return state;
    }
  }
};
export default loading;
