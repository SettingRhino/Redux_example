import { connect } from "react-redux";
import ActionComponent from "../ActionComponent";
import { setAge } from "../actions/collectionAction";

const mapDispathchToProps = (dispatch) => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age))
  };
};
export default connect(null, mapDispathchToProps)(ActionComponent);
