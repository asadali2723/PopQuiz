import {TrendingMoviesActionTypes} from '@_types/movies.type';
import {GET_MOVIES_REQUEST} from '@redux/actionType';

export const getMovies = (page: number): TrendingMoviesActionTypes => ({
  type: GET_MOVIES_REQUEST,
  payload: page,
});
