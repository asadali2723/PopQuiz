import Dashboard from '@screens/Dashboard';
import DetailScreen from '@screens/DetailScreen';
import Login from '@screens/Login';
import Profile from '@screens/Profile';
import Watchlist from '@screens/Watchlist';

export enum RouteName {
  Login_Screen = 'login',
  Dashboard_Screen = 'dashboard',
  Detail_Screen = 'detailScreen',
  Profile_Screen = 'profile',
  WatchList_Screen = 'watchList',
}

export const SCREENS = {
  [RouteName.Login_Screen]: Login,
  [RouteName.Dashboard_Screen]: Dashboard,
  [RouteName.Detail_Screen]: DetailScreen,
  [RouteName.Profile_Screen]: Profile,
  [RouteName.WatchList_Screen]: Watchlist,
};
