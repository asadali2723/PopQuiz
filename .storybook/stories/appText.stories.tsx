import React from 'react';
import {AppText} from '../../src/components/resuableComponent/appText';

export default {
  title: 'Components/AppText',
  component: AppText,
};

export const Default = () => <AppText>Sample Text</AppText>;
export const LargeText = () => (
  <AppText style={{fontSize: 24}}>Large Text</AppText>
);
