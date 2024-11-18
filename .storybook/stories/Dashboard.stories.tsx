import React from 'react';
import {Story, Meta} from '@storybook/react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Dashboard from '../../src/screens/Dashboard';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Mock Redux store setup
const mockStore = createStore(state => ({
  movies: {
    results: [
      {
        id: 1,
        title: 'Inception',
        overview:
          'A mind-bending thriller about dream infiltration. A thief who enters the minds of others to steal their secrets must perform the perfect heist.',
        vote_average: 8.8,
        poster_path: '/qJ2tW6WMUDuxkkXbM2a4j2Q1vm5.jpg', // Example poster path from TMDB API
        release_date: '2010-07-16',
      },
      {
        id: 2,
        title: 'Inception 2',
        overview:
          'A mind-bending thriller about dream infiltration. A thief who enters the minds of others to steal their secrets must perform the perfect heist.',
        vote_average: 8.8,
        poster_path: '/qJ2tW6WMUDuxkkXbM2a4j2Q1vm5.jpg', // Example poster path from TMDB API
        release_date: '2010-07-16',
      },
    ],
    total_pages: 2,
    page: 1,
  },
}));

// Storybook Default Setup
export default {
  title: 'Screens/Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story = () => (
  <SafeAreaProvider>
    <Provider store={mockStore}>
      <Dashboard />
    </Provider>
  </SafeAreaProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  // Here we can simulate the loading state by modifying the store or props if needed
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  searchQuery: 'Movie 1',
};

export const NoData = Template.bind({});
NoData.args = {
  // Simulate no data scenario
};
