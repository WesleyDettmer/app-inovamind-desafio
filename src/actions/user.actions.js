import { userModels } from "../models";
import { alertActions } from "./";
import { history } from "../helpers";
import { userService } from "../services";

export const userActions = {
  login,
  logout,
  register
};

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userModels.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userModels.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userModels.LOGIN_FAILURE, error };
  }
}

function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      user => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userModels.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userModels.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userModels.REGISTER_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userModels.LOGOUT };
}
