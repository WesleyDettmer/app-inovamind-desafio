import { userModels } from "../models";

export function registration(state = {}, action) {
  switch (action.type) {
    case userModels.REGISTER_REQUEST:
      return { registering: true };
    case userModels.REGISTER_SUCCESS:
      return {};
    case userModels.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
}
