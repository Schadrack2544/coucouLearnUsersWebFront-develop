import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import authReducer from './authReducer';
import registerStudentReducer from './_registerStudentReducer';

const rootReducer = {
  loadingBar,
  me: authReducer,
  registerStudent: registerStudentReducer,
};

export default rootReducer;
