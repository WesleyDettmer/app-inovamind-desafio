import React from "react";
import PropTypes from "prop-types";

const PlanetInformation = props => (
  <div>
    <h3>{props.item.name}</h3>
    <div id={props.item.type} />
    <ul>
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
  </div>
);

PlanetInformation.propTypes = {
  item: PropTypes.shape({
    terrain: PropTypes.string,
    gravity: PropTypes.string,
    name: PropTypes.string.isRequired,
    population: PropTypes.string,
    type: PropTypes.string
  })
};

export default PlanetInformation;
