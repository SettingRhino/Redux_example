import { SET_FILTER, RESET_FILTER } from "../actions/searchFilterActions";

const initState = {};

const searchFilter = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER: {
      const { fileName, value } = payload;
      return {
        ...state,
        [fileName]: value
      };
    }
    case RESET_FILTER: {
      return initState;
    }
    default:
      return state;
  }
};
export default searchFilter;
