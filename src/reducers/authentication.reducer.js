import { userModels } from "../models";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userModels.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userModels.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userModels.LOGIN_FAILURE:
      return {};
    case userModels.LOGOUT:
      return {};
    default:
      return state;
  }
}
