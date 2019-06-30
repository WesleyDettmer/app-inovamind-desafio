import React from "react";

import Person from "./person.jsx";
import Film from "./film.jsx";
import Planet from "./planet.jsx";
import Starship from "./starship.jsx";
import Species from "./species.jsx";

import * as sccs from "./result-component.scss";

const Results = props => (
  <ul className="results">
    {props.items.map((item, i) => {
      switch (item.type) {
        case "film":
          return <Film key={i} item={item} />;
        case "planet":
          return <Planet key={i} item={item} />;
        case "species":
          return <Species key={i} item={item} />;
        case "starship":
          return <Starship key={i} item={item} />;
        default:
          return <Person key={i} item={item} />;
      }
    })}
  </ul>
);

export default Results;
