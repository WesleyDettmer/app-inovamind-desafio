import React from "react";
import PropTypes from "prop-types";

const PersonInformation = props => (
  <div>
    <h3>{props.item.name}</h3>
    <div id={props.item.type} />
    <ul>
      <li>
        Gender <span>{props.item.gender}</span>
      </li>
      <li>
        Height <span>{props.item.height}cm</span>{" "}
      </li>
      <li>
        Weight <span>{props.item.mass}kg</span>{" "}
      </li>
    </ul>
  </div>
);

PersonInformation.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    type: PropTypes.string
  })
};

export default PersonInformation;
