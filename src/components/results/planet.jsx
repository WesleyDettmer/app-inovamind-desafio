import React from "react";
import PropTypes from "prop-types";
import { history } from "../../helpers";

const Planet = props => (
  <li className="results__item" onClick={() => itemHandler(props)}>
    <h3 className="results__title">{props.item.name}</h3>
    <div className="results__bg" id={props.item.type} />
    <ul className="results__info">
      <li>
        Terrain <span>{props.item.terrain}</span>{" "}
      </li>
      <li>
        Gravity <span>{props.item.gravity}</span>{" "}
      </li>
      <li>
        Population <span>{props.item.population}</span>{" "}
      </li>
    </ul>
  </li>
);

function itemHandler(props) {
  history.push("/info", props);
}

Planet.propTypes = {
  item: PropTypes.shape({
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    type: PropTypes.string
  })
};

export default Planet;
