import {
  ADD_TO_WATCHLIST,
  DELETE_RATING,
  GET_RATED_MOVIES,
  GET_WATCHLIST,
  POST_RATING_REQUEST,
} from '@redux/actionType';

export const postRating = (movieId: number, rating: number) => ({
  type: POST_RATING_REQUEST,
  payload: {movieId, rating},
});
export const deleteRating = (movieId: number) => ({
  type: DELETE_RATING,
  payload: {movieId},
});

export const addToWatchlist = (movieId: number) => ({
  type: ADD_TO_WATCHLIST,
  payload: {movieId},
});
export const getRatedMovies = () => ({
  type: GET_RATED_MOVIES,
});
export const getWatchlistAction = () => ({
  type: GET_WATCHLIST,
});
