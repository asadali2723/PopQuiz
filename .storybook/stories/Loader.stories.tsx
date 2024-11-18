import React from 'react';
import {View, StyleSheet} from 'react-native';
import Loader from '../../src/components/loader'; // Adjust the path as necessary
import {colors} from '../../src/constants/colors'; // Adjust the path as necessary

export default {
  title: 'Components/Loader',
  component: Loader,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400, // Ensure there's enough space to see the loader
  },
});

export const Default = () => (
  <View style={styles.container}>
    <Loader enable={true} />
  </View>
);

export const SmallLoader = () => (
  <View style={styles.container}>
    <Loader enable={true} size="small" color={colors.red.asteriskSymbol} />
  </View>
);

export const LargeLoader = () => (
  <View style={styles.container}>
    <Loader enable={true} size="large" color={colors.blue.lightBlue} />
  </View>
);

export const CustomPosition = () => (
  <View style={styles.container}>
    <Loader
      enable={true}
      size="large"
      color={colors.green.main}
      style={{bottom: 50}}
    />
  </View>
);
