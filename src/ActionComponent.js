import React from "react";
import PropsTypes from "prop-types";
const ActionComponent = (props) => {
  const { setAge } = props;
  const age2up = (e) => {
    setAge(2, 19);
  };
  return (
    <>
      <button onClick={age2up}>플러스버튼!</button>
    </>
  );
};
ActionComponent.propsType = {
  setAge: PropsTypes.func
};
export default ActionComponent;
