import React from "react";
import PropTypes from "prop-types";

import * as sccs from "./film-intro.scss";

const FilmInformation = props => (
  <div>
    <h3 className="row text-center">
      {props.item.name}
      <span> (Episode {props.item.episode_id})</span>
    </h3>
    <div id={props.item.type} />
    <div>
      <div>
        Released: <span>{props.item.release_date}</span>
      </div>
      <div>
        Directed by: <span>{props.item.director}</span>
      </div>
      <div>
        Produced by: <span>{props.item.producer}</span>
      </div>
      <div>
        Opening Crawl: <span>{props.item.opening_crawl}</span>
      </div>
    </div>
  </div>
);

FilmInformation.propTypes = {
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

export default FilmInformation;
