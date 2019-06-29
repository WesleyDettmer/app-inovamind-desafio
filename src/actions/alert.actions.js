import { alertModels } from "../models";

export const alertActions = {
  success,
  error,
  clear
};

function success(message) {
  return { type: alertModels.SUCCESS, message };
}

function error(message) {
  return { type: alertModels.ERROR, message };
}

function clear() {
  return { type: alertModels.CLEAR };
}
