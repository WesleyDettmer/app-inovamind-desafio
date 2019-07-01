import fetch from "isomorphic-fetch";
import { itemModels } from "../models";
import { searchService } from "../services";
import { alertActions } from "./";

function compareNames(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

function fetchAllItems(searchStr) {
  return dispatch => {
    dispatch(updateSrcString(searchStr));
    dispatch(requestItems(searchStr));
    searchService.fetchAllItems(searchStr).then(
      info => {
        const items = prepareItems(info);
        dispatch(receiveItems(searchStr, items));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function shouldFetchItems(state, searchStr) {
  const posts = state.items.itemsBySearchString[searchStr];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  }
  return false;
}

export function fetchItemsIfNeeded(searchStr) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState(), searchStr)) {
      return dispatch(fetchAllItems(searchStr));
    }
    return dispatch(updateSrcString(searchStr));
  };
}

function updateSrcString(searchStr) {
  return {
    type: itemModels.UPDATE_SRC,
    searchStr
  };
}

function requestItems(searchStr) {
  return {
    type: itemModels.REQUEST_ITEMS,
    searchStr
  };
}

function receiveItems(searchStr, items) {
  return {
    type: itemModels.RECEIVE_ITEMS,
    searchStr,
    items,
    receivedAt: Date.now()
  };
}

function prepareItems(array) {
  let combined = [];
  array.forEach(property => {
    combined = combined.concat(property.results);
  });

  return combined
    .map(property => {
      if (Object.hasOwnProperty.call(property, "episode_id")) {
        return {
          type: "film",
          name: property.title,
          episode_id: property.episode_id,
          director: property.director,
          producer: property.producer,
          release_date: property.release_date
        };
      } else if (Object.hasOwnProperty.call(property, "model")) {
        return {
          type: "starship",
          name: property.name,
          model: property.model,
          hyperdrive_rating: property.hyperdrive_rating,
          manufacturer: property.manufacturer
        };
      } else if (Object.hasOwnProperty.call(property, "classification")) {
        return {
          type: "species",
          name: property.name,
          classification: property.classification,
          designation: property.designation,
          language: property.language
        };
      } else if (Object.hasOwnProperty.call(property, "orbital_period")) {
        return {
          type: "planet",
          name: property.name,
          gravity: property.gravity,
          terrain: property.terrain,
          population: property.population
        };
      }
      return {
        type: "person",
        name: property.name,
        gender: property.gender,
        height: property.height,
        mass: property.mass
      };
    })
    .sort(compareNames);
}
