import React from "react";

import PersonInformation from "./person-information";
import FilmInformation from "./film-information.jsx";
import PlanetInformation from "./planet-information.jsx";
import StarshipInformation from "./starship-information.jsx";
import SpeciesInformation from "./species-information.jsx";

import * as sccs from "./result-information-component.scss";

const InformationResults = props => {
  switch (props.items.type) {
    case "film":
      return (
        <div>
          <FilmInformation item={props.items} />
        </div>
      );
    case "planet":
      return <PlanetInformation item={props.items} />;
    case "species":
      return <SpeciesInformation item={props.items} />;
    case "starship":
      return <StarshipInformation item={props.items} />;
    default:
      return <PersonInformation item={props.items} />;
  }
};

export default InformationResults;
