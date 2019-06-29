import { alertModels } from "../models";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertModels.SUCCESS:
      return {
        type: "alert-success",
        message: action.message
      };
    case alertModels.ERROR:
      return {
        type: "alert-danger",
        message: action.message
      };
    case alertModels.CLEAR:
      return {};
    default:
      return state;
  }
}
