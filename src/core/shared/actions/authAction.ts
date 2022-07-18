import DefaultApi from 'api/restful';
import Constants from 'api/utils/constants';
import Keys from 'api/utils/constants/keys';
import isAuth from 'helpers/isAuth';
import Secure from 'helpers/secureLS';
import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
} from '../_constants/actionType';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = data => ({
  type: AUTH_SUCCESS,
  data,
});

export const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const signin =
  (email: string, password: string) => async dispatch => {
    dispatch(authStart());
    const authData = {
      email,
      password,
    };
    const response = await DefaultApi.OpenRoute.postRoute(
      Constants.Endpoints.LOGIN_ENDPOINT,
      authData,
    );
    const { data, error } = response;
    if (data) {
      const { token, user } = data;
      Secure.setToken(token);
      Secure.set(Keys.USER_INFO, JSON.stringify(user));
      dispatch(authSuccess(data));
      return data;
    }
    dispatch(authFail(error));
    throw error;
  };

export const logout = () => async dispatch => {
  const response = await DefaultApi.PatchRoute.patchRoute(
    Constants.Endpoints.LOGOUT_ENDPOINT,
  );
  const { data, error } = response;
  if (data) {
    dispatch(authLogout());
    return { data };
  }
  return { error };
};

export const syncyAuth = () => dispatch => {
  try {
    const token = Secure.getToken();
    const userInfo = Secure.get(Keys.USER_INFO);
    if (!isAuth() || !userInfo) {
      dispatch(logout());
      return false;
    }
    dispatch(authSuccess({ token, user: JSON.parse(userInfo) }));
    return isAuth();
  } catch (error) {
    return false;
  }
};
