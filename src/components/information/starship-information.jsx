import React from "react";
import PropTypes from "prop-types";

const FilmInformation = props => (
  <div>
    <h3>{props.item.name}</h3>
    <div id={props.item.type} />
    <ul>
      <li>
        Model <span>{props.item.model}</span>{" "}
      </li>
      <li>
        Manufacturer <span>{props.item.manufacturer}</span>{" "}
      </li>
      <li>
        Hyperdrive Rating <span>{props.item.hyperdrive_rating}</span>{" "}
      </li>
    </ul>
  </div>
);

FilmInformation.propTypes = {
  item: PropTypes.shape({
    model: PropTypes.string,
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string,
    hyperdrive_rating: PropTypes.string,
    type: PropTypes.string.isRequired
  })
};

export default FilmInformation;
