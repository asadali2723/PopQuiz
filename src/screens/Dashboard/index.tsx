/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '@redux/action/moviesAction';
import {Dispatch} from 'redux';
import {RootState} from '@redux/reducer';
import {Movie, TrendingMoviesActionTypes} from '@_types/movies.type';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListTile from './flatlistTile';
import {ConstNumber, GlobalStyleValues, RouteName} from '@constants';
import _ from 'lodash';
import {styles} from './styles';
import AppPressable from '@components/resuableComponent/appPressable';
import {navigate} from '@services/navigationService';
import EmptyListComponent from '@components/resuableComponent/emptyListComp';

const Dashboard = () => {
  const dispatch =
    useDispatch<Dispatch<TrendingMoviesActionTypes | {type: string}>>();
  const {top} = useSafeAreaInsets();
  const movie = useSelector((state: RootState) => state.movies);
  const [moviesData, setMoviesData] = useState<Movie[]>(movie?.results || []);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(moviesData);
  const [totalPages, setTotalPage] = useState<number>(
    movie?.total_pages || ConstNumber.VALUE_1,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (_.isEmpty(movie?.results)) {
      dispatch(getMovies(ConstNumber.VALUE_1));
    }
  }, [dispatch, movie?.results]);

  useEffect(() => {
    if (
      !_.isEmpty(movie?.results) &&
      movie?.total_pages !== 0 &&
      searchQuery?.length === 0
    ) {
      if (movie.results !== moviesData) {
        setMoviesData(movie.results);
        setFilteredMovies(movie.results);
      }
      if (movie.total_pages !== totalPages) {
        setTotalPage(movie.total_pages);
      }
      setIsLoading(false);
    }
  }, [movie, moviesData, totalPages, searchQuery]);

  const loadMoreMovies = useCallback(() => {
    if (movie?.page < totalPages && !isLoading) {
      setIsLoading(true);
      dispatch(getMovies(movie?.page + ConstNumber.VALUE_1));
    }
  }, [movie?.page, dispatch, totalPages, isLoading]);

  const handleSearch = React.useCallback(
    (query: string) => {
      setSearchQuery(query);
      if (query) {
        const filtered = moviesData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        );
        setFilteredMovies(filtered);
      } else {
        setFilteredMovies(moviesData);
      }
    },
    [moviesData],
  );

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={GlobalStyleValues.TransParent}
        barStyle={GlobalStyleValues.DARK_CONTENT}
      />
      <View style={[styles.headerContainer, {marginTop: top}]}>
        <AppPressable
          onPress={() => {
            navigate(RouteName.Profile_Screen);
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </AppPressable>
        <Text style={styles.headerTitle}>Trending Movies</Text>
        <AppPressable
          onPress={() => {
            navigate(RouteName.WatchList_Screen);
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Watchlist</Text>
        </AppPressable>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredMovies}
        renderItem={({item}) => <FlatListTile item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={ConstNumber.VALUE_2}
        contentContainerStyle={styles.moviesList}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={ConstNumber.VALUE_05}
        ListFooterComponent={
          isLoading && searchQuery?.length === 0 ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : null
        }
        ListEmptyComponent={() => (
          <EmptyListComponent
            title={
              searchQuery && !_.isEmpty(movie.results)
                ? 'No Result Found!'
                : 'No Data Found!'
            }
          />
        )}
      />
    </View>
  );
};

export default Dashboard;
