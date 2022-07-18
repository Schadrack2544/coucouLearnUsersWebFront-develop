import DashboardActivity from 'modules/activities/DashboardActivity';

export default {
  name: 'Dashboard',
  protected: false,
  guestOnly: false,
  path: '/dashboard',
  component: DashboardActivity,
  currentTab: 0,
};
