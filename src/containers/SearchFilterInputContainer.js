import { connect } from "react-redux";
import { setFilter } from "../actions/searchFilterActions";
import InputComponent from "../InputComponent";

const mapStateToProps = (state, props) => {
  const value = state.searchFilter[props.name] || "";
  return { value };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: dispatch(setFilter)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
