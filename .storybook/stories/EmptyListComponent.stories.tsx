// EmptyListComponent.stories.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import EmptyListComponent from '../../src/components/resuableComponent/emptyListComp';

export default {
  title: 'Components/EmptyListComponent',
  component: EmptyListComponent,
};

export const Default = () => (
  <View style={styles.container}>
    <EmptyListComponent title="No items found" />
  </View>
);

export const WithCustomTitle = () => (
  <View style={styles.container}>
    <EmptyListComponent title="No items found" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
