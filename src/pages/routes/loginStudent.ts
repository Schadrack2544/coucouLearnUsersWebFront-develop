import LoginStudentActivity from 'modules/activities/LoginStudentActivity';

export default {
  name: 'Login',
  protected: false,
  guestOnly: true,
  path: '/student/login',
  component: LoginStudentActivity,
};
