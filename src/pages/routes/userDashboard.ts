import UserDashboardActivity from 'modules/activities/UserDashboardActivity';

export default {
  name: 'Dashboard',
  protected: false,
  guestOnly: false,
  path: '/contents/home',
  component: UserDashboardActivity,
};
