import DefaultApi from 'api/restful';
import Constants from 'api/utils/constants';
import {
  REGISTER_STUDENT_FAIL,
  REGISTER_STUDENT_START,
  REGISTER_STUDENT_SUCCESS,
} from '../_constants/actionType';

export const registerStudentStart = () => ({
  type: REGISTER_STUDENT_START,
});

export const registerStudentSuccess = data => ({
  type: REGISTER_STUDENT_SUCCESS,
  data,
});

export const registerStudentFail = error => ({
  type: REGISTER_STUDENT_FAIL,
  error,
});

export const signup = (payload: object) => async dispatch => {
  dispatch(registerStudentStart());
  const response = await DefaultApi.OpenRoute.postRoute(
    Constants.Endpoints.REGISTER_STUDENT,
    payload,
  );
  const { data, error } = response;
  if (data) {
    dispatch(registerStudentSuccess(data));
    return data;
  }
  dispatch(registerStudentFail(error));
  throw error;
};
