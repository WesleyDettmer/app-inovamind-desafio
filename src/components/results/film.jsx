import React from "react";
import PropTypes from "prop-types";
import { history } from "../../helpers";

const Film = props => (
  <li className="results__item" onClick={() => itemHandler(props)}>
    <h3 className="results__title">
      {props.item.name}
      <span> (Episode {props.item.episode_id})</span>
    </h3>
    <div className="results__bg" id={props.item.type} />
    <ul className="results__info">
      <li>
        Released <span>{props.item.release_date}</span>
      </li>
      <li>
        Directed by <span>{props.item.director}</span>
      </li>
      <li>
        Produced by <span>{props.item.producer}</span>
      </li>
    </ul>
  </li>
);

function itemHandler(props) {
  history.push("/info", props);
}

Film.propTypes = {
  item: PropTypes.shape({
    director: PropTypes.string,
    episode_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    release_date: PropTypes.string,
    type: PropTypes.string.isRequired,
    opening_crawl: PropTypes.string
  })
};

export default Film;
