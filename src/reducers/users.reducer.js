import { userModels } from "../models";

export function users(state = {}, action) {
  switch (action.type) {
    case userModels.GETALL_REQUEST:
      return {
        loading: true
      };
    case userModels.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userModels.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
