import { connect } from "react-redux";
import ActionComponent from "../ActionComponent";
import { setAge } from "../actions/collectionAction";

// const mapDispathchToProps = (dispatch) => {
//   const setAge = (id, age) =>
//     dispatch({ type: "user/SET_USER", payload: { id, age } });
//   return {
//     //setAge:(id,age)=>dispatch({type:"utype",payload:{id,age} })
//     setAge: setAge
//   };
// };
const mapDispathchToProps = {
  setAge: setAge
};

export default connect(null, mapDispathchToProps)(ActionComponent);
