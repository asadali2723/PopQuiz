import {combineReducers} from 'redux';
import authReducer, {AuthState} from './authReducer';
import loaderReducer, {LoaderState} from './loaderReducer';
import moviesReducer from './moviesReducer';
import {MovieActionTypes, TrendingMoviesState} from '@_types/movies.type';
import {ratingReducer} from './ratingReducer';

const allReducers = combineReducers({
  auth: authReducer,
  loading: loaderReducer,
  movies: moviesReducer,
  rating: ratingReducer,
});

export interface RootState {
  auth: AuthState;
  loading: LoaderState;
  movies: TrendingMoviesState;
  rating: MovieActionTypes;
}

export default allReducers;
