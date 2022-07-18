import updateObject from 'helpers/updateObject';
import {
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_START,
  AUTH_SUCCESS,
} from '../_constants/actionType';

const authStart = (state, action) =>
  updateObject(state, { error: null, loading: true });

const authLogout = (state, action) =>
  updateObject(state, { error: null, data: null, loading: false });

const authSuccess = (state, action) =>
  updateObject(state, {
    data: action.data,
    error: null,
    loading: false,
  });

const authFail = (state, action) =>
  updateObject(state, {
    error: action.error,
    loading: false,
  });

const authInitialState = {
  data: null,
  error: null,
  loading: false,
};

const authReducer = (state = authInitialState, action: any = {}) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default authReducer;
