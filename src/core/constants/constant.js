//
// Constant variables
//
// Modules
import {
  RiHome4Line,
  RiDiscLine,
  RiMusic2Line,
  RiAlbumLine,
  RiMicLine,
  RiRadio2Line,
  RiPieChartLine,
  RiHeartLine,
  RiHistoryLine,
  RiCalendarEventLine,
  RiAddCircleLine,
  RiErrorWarningLine,
  RiUser3Line,
  RiSettingsLine,
  RiMoneyDollarCircleLine,
  RiGooglePlayFill,
  RiAppStoreFill,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from '@remixicon/react';
//
// Sidebar navigation array
export var NAVBAR = [
  {
    name: 'Home',
    href: '/music',
    icon: RiHome4Line,
  },
  {
    name: 'Genres',
    href: '/music/genre',
    icon: RiDiscLine,
  },
  {
    name: 'Music',
    href: '/music/song',
    icon: RiMusic2Line,
  },
  {
    name: 'Albums',
    href: '/music/album',
    icon: RiAlbumLine,
  },
  {
    name: 'Artists',
    href: '/music/artist',
    icon: RiMicLine,
  },
  {
    name: 'Stations',
    href: '/music/stations',
    icon: RiRadio2Line,
  },
  {
    title: 'Music',
  },
  {
    name: 'Analytics',
    href: '/music/analytics',
    icon: RiPieChartLine,
  },
  {
    name: 'Favorites',
    href: '/music/favorites',
    icon: RiHeartLine,
  },
  {
    name: 'History',
    href: '/music/history',
    icon: RiHistoryLine,
  },
  {
    title: 'Events',
  },
  {
    name: 'Events',
    href: '/music/event',
    icon: RiCalendarEventLine,
  },
  {
    name: 'Add Event',
    href: '/music/add-event',
    icon: RiAddCircleLine,
  },
  {
    title: 'Extra',
  },
  {
    name: '404 Page',
    href: '/404',
    icon: RiErrorWarningLine,
  },
];
//
// Top header navigation array
export var NAVBAR_LINK = [
  {
    name: 'Discover',
    href: '/soon',
  },
  {
    name: 'Pricing',
    href: '/',
    fragment: 'pricing',
  },
  {
    name: 'About us',
    href: '/soon',
  },
  {
    name: 'Blog',
    href: '/soon',
  },
  {
    name: 'Contact us',
    href: '/soon',
  },
];
//
// User profile dropdown options
export var OPTIONS = [
  {
    name: 'Profile',
    href: '/music/profile',
    icon: RiUser3Line,
  },
  {
    name: 'Favorites',
    href: '/music/favorites',
    icon: RiHeartLine,
  },
  {
    name: 'Settings',
    href: '/music/settings',
    icon: RiSettingsLine,
  },
  {
    name: 'Plan',
    href: '/music/plan',
    icon: RiMoneyDollarCircleLine,
  },
];
//
// Language dropdown options
export var LANGUAGES = [
  {
    id: 1,
    name: 'Hindi',
    checked: false,
  },
  {
    id: 2,
    name: 'Punjabi',
    checked: false,
  },
  {
    id: 3,
    name: 'Tamil',
    checked: false,
  },
  {
    id: 4,
    name: 'Bengali',
    checked: false,
  },
  {
    id: 5,
    name: 'Kannada',
    checked: false,
  },
  {
    id: 6,
    name: 'Gujarati',
    checked: false,
  },
  {
    id: 7,
    name: 'Urdu',
    checked: false,
  },
  {
    id: 8,
    name: 'English',
    checked: true,
  },
  {
    id: 9,
    name: 'Telugu',
    checked: false,
  },
  {
    id: 10,
    name: 'Bhojpuri',
    checked: false,
  },
  {
    id: 11,
    name: 'Malayalam',
    checked: false,
  },
  {
    id: 12,
    name: 'Marathi',
    checked: false,
  },
  {
    id: 13,
    name: 'Haryanvi',
    checked: false,
  },
  {
    id: 14,
    name: 'Rajasthani',
    checked: false,
  },
  {
    id: 15,
    name: 'Assamese',
    checked: false,
  },
  {
    id: 16,
    name: 'Odia',
    checked: false,
  },
];
//
// Social links
export var SOCIAL = [
  {
    name: 'Facebook',
    icon: RiFacebookCircleLine,
    href: '#',
  },
  {
    name: 'Instagram',
    icon: RiInstagramLine,
    href: '#',
  },
  {
    name: 'X',
    icon: RiTwitterXLine,
    href: '#',
  },
  {
    name: 'Pinterest',
    icon: RiPinterestLine,
    href: '#',
  },
  {
    name: 'Youtube',
    icon: RiYoutubeLine,
    href: '#',
  },
];
//
// The default user object is utilized to display user data upon login.
// You can remove it after the integration process is completed.
export var DEFAULT_USER = {
  name: 'Androws Kinny',
  cover: '/images/users/thumb.jpg',
  role: 'admin',
};
//
// Brand object
export var BRAND = {
  name: 'Xhosa Hip Hop',
  href: '/',
  logo: '/images/logos/xhap.png',
  email: 'info@xhosahiphop.co.za',
};
//
// Mobile app data
export var APP = [
  {
    name: 'Google Play',
    icon: RiGooglePlayFill,
    href: '#',
  },
  {
    name: 'App Store',
    icon: RiAppStoreFill,
    href: '#',
  },
];
//
// Chart.js tooltip config
export var CHART_TOOLTIP = {
  titleMarginBottom: 6,
  caretSize: 6,
  caretPadding: 10,
  boxWidth: 10,
  boxHeight: 10,
  boxPadding: 4,
  intersect: false,
  padding: {
    top: 8,
    right: 12,
    bottom: 8,
    left: 12,
  },
};
//
// Local storage keys
export var USER_KEY = 'user';
export var SONG_KEY = 'songs';
//
// Attribute names
export var SIDEBAR_TOGGLE = 'data-sidebar-toggle';
export var SEARCH_RESULTS = 'data-search-results';
export var THEME = 'data-theme';
//
// Toggle to display theme configuration choices.
export var ENABLE_SETTINGS = true;
//
// Enable RTL direction.
export var ENABLE_RTL = false;
//
// Activate dark mode for the theme.
export var THEME_MODE = 'dark';
//
// Components theme
export var HEADER_THEME = 'orange';
export var SIDEBAR_THEME = 'orange';
export var PLAYER_THEME = 'orange';
//
// Global HTML classes
export var ACTIVE = 'active';
export var SHOW = 'show';
export var COLLAPSE = 'collapse';
