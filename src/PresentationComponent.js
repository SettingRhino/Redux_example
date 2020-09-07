import React from "react";
import PropTypes from "prop-types";

const PresentationComponent = (props) => {
  const { userName, entity } = props;
  return (
    <>
      <div>
        이름:{userName}
        <br />
        항목:{entity && `name: ${entity.name},age:${entity.age}`}
      </div>
    </>
  );
};

PresentationComponent.propsTypes = {
  userName: PropTypes.string,
  entity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number
  })
};
export default PresentationComponent;
