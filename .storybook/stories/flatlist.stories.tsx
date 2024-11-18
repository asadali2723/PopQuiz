import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlatListTile from '../../src/screens/Dashboard/flatlistTile'; // Adjust the path as necessary
import {AppText} from '../../src/components/resuableComponent/appText';
import {colors} from '../../src/constants/colors';
import {ConstNumber} from '../../src/constants';

// Mocked navigate function for Storybook
const navigate = (route: string, params: any) => {
  console.log(`Navigating to ${route} with params:`, params);
};

export default {
  title: 'Components/FlatListTile',
  component: FlatListTile,
  parameters: {
    // Optionally add controls and notes
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400, // Ensure there's enough space to see the loader
  },
});

const mockMovie = {
  title: 'Inception',
  overview:
    'A mind-bending thriller about dream infiltration. A thief who enters the minds of others to steal their secrets must perform the perfect heist.',
  vote_average: 8.8,
  poster_path: '/qJ2tW6WMUDuxkkXbM2a4j2Q1vm5.jpg', // Example poster path from TMDB API
};

export const Default = () => (
  <View style={styles.container}>
    <FlatListTile item={mockMovie} />
  </View>
);

export const LongOverview = () => (
  <View style={styles.container}>
    <FlatListTile
      item={{
        ...mockMovie,
        overview:
          'A long description that exceeds the character limit to test the truncation functionality. This should be cut off with "..." at the end to ensure we don’t display the entire content.',
      }}
    />
  </View>
);

export const ShortOverview = () => (
  <View style={styles.container}>
    <FlatListTile
      item={{
        ...mockMovie,
        overview: 'A short description.',
      }}
    />
  </View>
);
