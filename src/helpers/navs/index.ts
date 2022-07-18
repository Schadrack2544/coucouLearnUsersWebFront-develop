import OverviewIcon from 'modules/_partials/_drawable/icons/overviewIcon';

export const leftTopNavs = [
  {
    icon: null,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: null,
    label: 'Courses',
    path: '/courses',
  },
  {
    icon: null,
    label: 'Traiblazers',
    path: '/traiblazers',
  },
  {
    icon: null,
    label: 'Students',
    path: '/students',
  },
  {
    icon: null,
    label: 'Tutors',
    path: '/tutors',
  },
];

export const leftBottomNavs = [
  {
    icon: null,
    label: 'Profile',
    path: '/profile',
  },

  {
    icon: null,
    label: 'Logout',
    path: '/logout',
    className: 'text-red-500',
  },
];

export const topNavs = [
  {
    icon: null,
    label: 'Settings',
    path: '/settings',
    className: 'font-medium',
  },
];

export const sideNavs = [
  {
    icon: OverviewIcon,
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icon: OverviewIcon,
    label: 'Curricula',
    to: '/curricula',
  },
  {
    icon: OverviewIcon,
    label: 'Grades',
    to: '/grades',
  },
  {
    icon: OverviewIcon,
    label: 'Safeguarding tips',
    to: '/safeguarding tips',
  },
  {
    icon: OverviewIcon,
    label: 'Courses',
    to: '/courses',
  },
  {
    icon: OverviewIcon,
    label: 'Learning contents',
    to: '/learning-contents',
  },

  {
    icon: OverviewIcon,
    label: 'Library',
    to: '/library',
  },
  {
    icon: OverviewIcon,
    label: 'Tutors',
    to: '/tutors',
  },
  {
    icon: OverviewIcon,
    label: 'Board game',
    to: '/board-game',
  },
  {
    icon: OverviewIcon,
    label: 'Leaderboard',
    to: '/leaderboard',
  },
  {
    icon: OverviewIcon,
    label: 'Competitions',
    to: '/competitions',
  },
  {
    icon: OverviewIcon,
    label: 'Analytics',
    to: '/analytics',
  },
  {
    icon: OverviewIcon,
    label: 'Users',
    to: '/users',
  },
];

export const clientTopNavs = [
  {
    label: 'Home',
    path: '/home',
    more: false,
  },
  {
    label: 'Learning Contents',
    path: '/contents',
    more: true,
  },
  {
    label: 'The Why?',
    path: '/home/why',
    more: false,
    tab: 1,
  },
  {
    label: 'Features',
    path: '/home/features',
    more: false,
    tab: 2,
  },
  {
    label: 'Pricing',
    path: '/home/pricing',
    more: false,
    tab: 3,
  },
  {
    label: 'Testmonials',
    path: '/home/testmonials',
    more: false,
    tab: 4,
  },
  {
    label: 'Tutors',
    path: '/home/tutors',
    more: false,
    tab: 5,
  },
  {
    label: 'Contact',
    path: '/home/contact',
    more: false,
    tab: 6,
  },

  {
    label: 'Shop',
    path: '/shop',
    more: false,
    tab: 7,
  },
];
