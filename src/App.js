import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
//import { setLoading, resetLoading } from "./actions/loadingActions";
//import { setUser } from "./actions/userActions";
import { setCollection, setAge } from "./actions/collectionAction";
export default function App() {
  const store = configureStore({});
  useEffect(() => {
    store.dispatch(
      setCollection([
        { id: 1, name: "aa1", age: 19 },
        { id: 2, name: "bb1", age: 36 }
      ])
    );
    store.dispatch(setAge(1, 99));
    const { collection } = store.getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map((id) => entities[id]);
    console.log(originalPayload);
    // store.dispatch(setLoading(true));
    // store.dispatch(resetLoading());
    // store.dispatch(setUser({ name: "PPP", age: 25 }));
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Provider>
  );
}
