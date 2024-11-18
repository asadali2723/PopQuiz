import React from 'react';
import AppPressable from '../../src/components/resuableComponent/appPressable';
import {action} from '@storybook/addon-actions';
import {AppText} from '../../src/components/resuableComponent/appText';

export default {
  title: 'Components/AppPressable',
  component: AppPressable,
};

export const Default = () => (
  <AppPressable onPress={action('button-press')}>
    <AppText>Click Me</AppText>
  </AppPressable>
);
