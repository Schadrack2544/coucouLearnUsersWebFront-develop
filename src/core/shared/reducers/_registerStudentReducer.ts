import updateObject from 'helpers/updateObject';
import {
  REGISTER_STUDENT_FAIL,
  REGISTER_STUDENT_START,
  REGISTER_STUDENT_SUCCESS,
} from '../_constants/actionType';

const registerStudentStart = (state, action) =>
  updateObject(state, { error: null, loading: true });

const registerStudentSuccess = (state, action) =>
  updateObject(state, {
    data: action.data,
    error: null,
    loading: false,
  });

const registerStudentFail = (state, action) =>
  updateObject(state, {
    error: action.error,
    loading: false,
  });

const registerStudentInitialState = {
  data: null,
  error: null,
  loading: false,
};

const registerStudentReducer = (
  state = registerStudentInitialState,
  action: any = {},
) => {
  switch (action.type) {
    case REGISTER_STUDENT_START:
      return registerStudentStart(state, action);
    case REGISTER_STUDENT_SUCCESS:
      return registerStudentSuccess(state, action);
    case REGISTER_STUDENT_FAIL:
      return registerStudentFail(state, action);
    default:
      return state;
  }
};

export default registerStudentReducer;
