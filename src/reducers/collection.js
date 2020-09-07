import { SET_COLLECTION, SET_AGE } from "../actions/collectionAction";
const initState = {
  ids: [],
  entities: {}
};

const collection = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COLLECTION: {
      const ids = payload.map((item) => item["id"]);
      const entities = payload.reduce((final, entity) => {
        return { ...final, [entity["id"]]: entity };
      }, {});
      // const entities = payload.reduce(
      //   (final, entity) => ({ ...final, [entity["id"]]: entity }),
      //   {}
      // );
      return { ...state, ids, entities };
    }
    case SET_AGE: {
      const { id, age } = payload;
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: { ...state.entities[id], age }
        }
      };
    }
    default: {
      return state;
    }
  }
};
export default collection;
