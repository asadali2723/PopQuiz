/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import StorybookUI from './.storybook';

const SHOW_STORYBOOK = true;

AppRegistry.registerComponent(appName, () =>
  SHOW_STORYBOOK ? StorybookUI : App,
);
