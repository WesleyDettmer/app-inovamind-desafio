import React from "react";
import PropTypes from "prop-types";

const FilmInformation = props => (
  <li>
    <h3>{props.item.name}</h3>
    <div id={props.item.type} />
    <ul>
      <li>
        Designation <span>{props.item.designation}</span>{" "}
      </li>
      <li>
        Classification <span>{props.item.classification}</span>{" "}
      </li>
      <li>
        Language <span>{props.item.language}</span>{" "}
      </li>
    </ul>
  </li>
);

FilmInformation.propTypes = {
  item: PropTypes.shape({
    designation: PropTypes.string,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string,
    language: PropTypes.string,
    type: PropTypes.string.isRequired
  })
};

export default FilmInformation;
