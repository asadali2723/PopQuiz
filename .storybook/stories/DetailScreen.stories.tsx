import React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailScreen from '../../src/screens/DetailScreen'; // Adjust the path as necessary
import {AppText} from '../../src/components/resuableComponent/appText';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from '../../src/redux/reducer/index'; // Adjust with your rootReducer
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Mock Redux store
const store = createStore(allReducers);

// Mocking the navigation context
const Stack = createStackNavigator();

const NavigationWrapper = ({children}: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DetailScreen">{() => children}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default {
  title: 'Screens/DetailScreen',
  component: DetailScreen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400, // Ensure there's enough space to see the loader
  },
});

// Mock Movie Data
const mockMovie = {
  id: 1,
  title: 'Inception',
  overview:
    'A mind-bending thriller about dream infiltration. A thief who enters the minds of others to steal their secrets must perform the perfect heist.',
  vote_average: 8.8,
  poster_path: '/qJ2tW6WMUDuxkkXbM2a4j2Q1vm5.jpg', // Example poster path from TMDB API
  release_date: '2010-07-16',
};

// Default story showing DetailScreen with the mockMovie
export const Default = () => (
  <Provider store={store}>
    <NavigationWrapper>
      <DetailScreen route={{params: {item: mockMovie}}} />
    </NavigationWrapper>
  </Provider>
);

// Story for a Movie with no rating posted yet
export const NoRatingPosted = () => (
  <Provider store={store}>
    <NavigationWrapper>
      <DetailScreen route={{params: {item: mockMovie}}} />
    </NavigationWrapper>
  </Provider>
);

// Story for a Movie with a rating already posted
export const RatingPosted = () => {
  const mockRatedMovie = {
    ...mockMovie,
    rating: 8, // Assuming this movie already has a rating
  };

  return (
    <Provider store={store}>
      <NavigationWrapper>
        <DetailScreen route={{params: {item: mockRatedMovie}}} />
      </NavigationWrapper>
    </Provider>
  );
};
