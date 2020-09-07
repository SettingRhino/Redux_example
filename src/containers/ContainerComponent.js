import { connect } from "react-redux";
import PresentationComponent from "../PresentationComponent";
//state는 store의 state이다.
//props는 제공받는 데이터 이다.
//return으로 화면의 props를 넘겨준다.
const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name,
    entity: state.collection.entities[props.id]
  };
};
export default connect(mapStateToProps)(PresentationComponent);
