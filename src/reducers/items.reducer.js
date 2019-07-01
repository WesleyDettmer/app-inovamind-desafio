import { combineReducers } from "redux";
import { itemModels } from "../models";

function searchStr(state = "", action) {
  switch (action.type) {
    case itemModels.UPDATE_SRC:
      return action.searchStr;
    default:
      return state;
  }
}

function items(
  state = {
    isFetching: false,
    searchStr: "",
    items: []
  },
  action
) {
  switch (action.type) {
    case itemModels.REQUEST_ITEMS:
      return Object.assign({}, state, {
        searchStr: action.searchStr,
        isFetching: true
      });
    case itemModels.RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
}

function itemsBySearchString(state = {}, action) {
  switch (action.type) {
    case itemModels.RECEIVE_ITEMS:
    case itemModels.REQUEST_ITEMS:
      return Object.assign({}, state, {
        [action.searchStr]: items(state[action.searchStr], action)
      });
    default:
      return state;
  }
}

export default combineReducers({
  itemsBySearchString,
  searchStr
});
