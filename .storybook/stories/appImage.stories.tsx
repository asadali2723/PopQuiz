import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppImage from '../../src/components/resuableComponent/appImage';
import {action} from '@storybook/addon-actions';
export default {
  title: 'Components/AppImage',
  component: AppImage,
};

export const Default = () => (
  <View style={styles.container}>
    <AppImage
      onPress={action('button-press')}
      source={{uri: 'https://via.placeholder.com/150'}}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
