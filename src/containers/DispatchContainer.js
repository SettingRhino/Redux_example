import { connect } from "react-redux";
import ActionComponent from "../ActionComponent";
import { setAge } from "../actions/collectionAction";

// const mapDispathchToProps = (dispatch) => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age))
//   };
// };
const mapDispathchToProps = {
  setAge: setAge
};

export default connect(null, mapDispathchToProps)(ActionComponent);
