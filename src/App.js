import React, { useEffect } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
//import { setLoading, resetLoading } from "./actions/loadingActions";
//import { setUser } from "./actions/userActions";
import { setCollection, setAge } from "./actions/collectionAction";
import PresentationComponent from "./PresentationComponent";
import ContainerComponent from "./containers/ContainerComponent";
import DispatchContainer from "./containers/DispatchContainer";
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
    //store.dispatch(setUser({ name: "PPP", age: 25 }));
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          화면 컴포넌트:
          <PresentationComponent userName="화면컴포넌트" />
        </div>
        <hr />
        <div>
          데이터 컴포넌트 :
          <ContainerComponent id={2} />
        </div>
        <hr />
        <div>
          액션 데이터 컴포넌트:
          <DispatchContainer />
        </div>
      </div>
    </Provider>
  );
}
