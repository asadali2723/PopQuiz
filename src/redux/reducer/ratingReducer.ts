import {MovieActionTypes} from '@_types/movies.type';
import {
  POST_RATING_REQUEST,
  POST_RATING_SUCCESS,
  POST_RATING_FAILURE,
  DELETE_RATING,
  DELETE_RATING_SUCCESS,
  DELETE_RATING_FAILURE,
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHLIST_SUCCESS,
  ADD_TO_WATCHLIST_FAILURE,
  GET_RATED_MOVIES,
  GET_RATED_MOVIES_SUCCESS,
  GET_RATED_MOVIES_FAILURE,
  GET_WATCHLIST,
  GET_WATCHLIST_FAILURE,
  GET_WATCHLIST_SUCCESS,
} from '../actionType';
const initialState = {
  isLoading: false,
  error: null,
  isRatingPosted: false,
  isWatchlistUpdated: false,
  isRatingDeleted: false,
  ratedMovies: [],
  watchlist: [],
};
export const ratingReducer = (
  state = initialState,
  action: MovieActionTypes,
) => {
  switch (action.type) {
    case POST_RATING_REQUEST:
      return {...state, isLoading: true, error: null};

    case POST_RATING_SUCCESS:
      return {...state, isLoading: false, isRatingPosted: true, error: null};
    case POST_RATING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isRatingPosted: false,
      };

    case DELETE_RATING:
      return {...state, isLoading: true, error: null, isRatingDeleted: false};

    case DELETE_RATING_SUCCESS:
      return {...state, isLoading: false, isRatingDeleted: true, error: null};

    case DELETE_RATING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isRatingDeleted: false,
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        isLoading: true,
        error: null,
        isWatchlistUpdated: false,
      };

    case ADD_TO_WATCHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isWatchlistUpdated: true,
        error: null,
      };

    case ADD_TO_WATCHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isWatchlistUpdated: false,
      };
    // GET RATED MOVIES
    case GET_RATED_MOVIES:
      return {...state, isLoading: true};

    case GET_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ratedMovies: action.payload,
        error: null,
      };

    case GET_RATED_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        ratedMovies: [],
      };
    case GET_WATCHLIST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_WATCHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        watchlist: action.payload,
      };
    case GET_WATCHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
