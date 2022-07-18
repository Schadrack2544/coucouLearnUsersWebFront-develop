import LogoutActivity from 'modules/activities/LogoutActivity';

export default {
  name: 'Logout',
  protected: true,
  guestOnly: false,
  path: '/logout',
  component: LogoutActivity,
};
