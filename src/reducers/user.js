import { SET_USER } from "../actions/userActions";

export const user = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      return { ...state, ...payload };
    }
    default: {
      return state;
    }
  }
};

export default user;
