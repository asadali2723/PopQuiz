// BackIcon.stories.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import BackIcon from '../../src/components/resuableComponent/backIcon';
import {action} from '@storybook/addon-actions';
export default {
  title: 'Components/BackIcon',
  component: BackIcon,
};

export const Default = () => (
  <View style={styles.container}>
    <BackIcon onPress={action('button-press')} />
  </View>
);

export const WithCustomStyle = () => (
  <View style={styles.container}>
    <BackIcon
      extraStyle={{marginTop: 20, marginLeft: 10}}
      onPress={action('button-press')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
