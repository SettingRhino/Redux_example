# Redux_example

Created with CodeSandbox

Store:
createStore(reducer,initState)로 생성한다.

configureStore.js
createStore(combineReducer(reducers),initState,composeWithDevTools())

---------Store-----------
설명:
1.combineReducer(reducers)

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
reducers/index.js:
import loading from "./loading";
import user from "./user";
import collection from "./collection";

    export default {
      collection,
      loading,
      user
    };
    reducers: 위 세 개의 리듀서 모음.
    combineReducer로 조합해준다.

2.initState
초기 store에 들어가는 state

3..composeWithDevTools()
devTool 사용을 위한 것.

store를 하위 컴포넌트에게 내려??줌
<Provider store={store}></Provider>

---------dispatch&reducer&subscribe&getState-----------
action을 받아 reducer에게 전달.
store.dispatch({type:"uniq string",payload: {변경될 state}})

dispatch는 store에 등록된 리듀서에게 전달.
reducer는 type에 따라 store의 state값을 업데이트 요청함.
store는 해당 state를 업데이트한다.

또 dispatch는 action이 들어올때마다 subscribe(listner)를 호출한다.
{connect(mapStateToProps,DispatchToProps)(Component)나 useSelector Hook을 이용한다.}
store.getState():현재 state값을 조회

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
const state = store.getState();
console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출

---

-------------PresentationComponet&ContainerComponet-----------
PresentationComponet:일반적인 Component의 개념으로 redux와의 연관성이 없다.
ContainerComponet:redux와 PresentationView의 중간역활로
mapStateToProps:Store의 State를 Props로 내려준다.
mapDispatchToProps:dispatch를 Props로 내려준다.
connect(mapStateToProps,DispatchToProps)(PresentationComponet)
:mapStateToProps,DispatchToProps PresentationComponet를 연결

ParentComponent--props(1)-->ContainerComponet--props(2)-->PresentationComponet

ContainerComponet
const mapStateToProps=(state,props)=>{
//state:store의 state, props: ContainerComponet 넘겨준 props(1)
return{ PresentationComponet 뷰에 넘겨줄 Props(2)}
}
const mapDispatchToProps=(dispatch)=>{
const setAge=(id,age)=>dispatch({type:"SET_AGE",payload:{id,age}})
return{
//props(2)로 넘겨줄 dispatch된 함수들 이렇게 하면 subscribe할 필요 없음
setAge
}
}
export default connect(mapStateToProps,mapDispatchToProps)(PresentationComponet)

Reducer "searchFilter" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.

state를 리턴해주지 않았다.
