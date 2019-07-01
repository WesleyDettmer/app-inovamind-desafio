import { informationModel } from "../models";
import { informationService } from "../services";

export const informationActions = {
  getInfo
};

function getInfo() {
  return dispatch => {
    dispatch(request());

    informationService.getInfo();
  };
}

function request() {
  return { type: informationModel.RESULT_INFO };
}
function success(info) {
  return { type: informationModel.RESULT_INFO_SUCCESS, info };
}
function failure(error) {
  return { type: informationModel.RESULT_INFO_ERROR, error };
}
