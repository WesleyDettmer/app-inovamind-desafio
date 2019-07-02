import React from "react";
import PropTypes from "prop-types";
import { history } from "../../helpers";

const Film = props => (
  <li className="results__item" onClick={() => itemHandler(props)}>
    <h3 className="results__title">{props.item.name}</h3>
    <div className="results__bg" id={props.item.type} />
    <ul className="results__info">
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

function itemHandler(props) {
  history.push("/info", props);
}

Film.propTypes = {
  item: PropTypes.shape({
    designation: PropTypes.string,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string,
    language: PropTypes.string,
    type: PropTypes.string.isRequired
  })
};

export default Film;
