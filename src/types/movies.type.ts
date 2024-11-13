import {
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHLIST_FAILURE,
  ADD_TO_WATCHLIST_SUCCESS,
  DELETE_RATING,
  DELETE_RATING_FAILURE,
  DELETE_RATING_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_RATED_MOVIES,
  GET_RATED_MOVIES_FAILURE,
  GET_RATED_MOVIES_SUCCESS,
  GET_WATCHLIST,
  GET_WATCHLIST_FAILURE,
  GET_WATCHLIST_SUCCESS,
  POST_RATING_FAILURE,
  POST_RATING_REQUEST,
  POST_RATING_SUCCESS,
} from '@redux/actionType';

export interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  popularity: number;
  media_type: string;
  vote_count: number;
}
export interface TrendingMoviesState {
  page: number;
  total_pages: number;
  results: Movie[];
  loading: boolean;
  error: string | null;
}

interface GetTrendingMoviesRequestAction {
  type: typeof GET_MOVIES_REQUEST;
  payload: number;
}

interface GetTrendingMoviesSuccessAction {
  type: typeof GET_MOVIES_SUCCESS;
  payload: {
    page: number;
    total_pages: number;
    results: Movie[];
  };
}

interface GetTrendingMoviesFailureAction {
  type: typeof GET_MOVIES_FAILURE;
  payload: string;
}
export type TrendingMoviesActionTypes =
  | GetTrendingMoviesRequestAction
  | GetTrendingMoviesSuccessAction
  | GetTrendingMoviesFailureAction;
interface AddRatingPayload {
  movieId: number;
  rating: number;
}

interface DeleteRatingPayload {
  movieId: number;
}

interface AddToWatchlistPayload {
  movieId: number;
}

export interface AddRatingAction {
  type: typeof POST_RATING_REQUEST;
  payload: AddRatingPayload;
}

export interface AddRatingSuccessAction {
  type: typeof POST_RATING_SUCCESS;
  payload: any;
}

export interface AddRatingFailureAction {
  type: typeof POST_RATING_FAILURE;
  payload: string;
}

export interface DeleteRatingAction {
  type: typeof DELETE_RATING;
  payload: DeleteRatingPayload;
}

export interface DeleteRatingSuccessAction {
  type: typeof DELETE_RATING_SUCCESS;
  payload: any;
}

export interface DeleteRatingFailureAction {
  type: typeof DELETE_RATING_FAILURE;
  payload: string;
}

export interface AddToWatchlistAction {
  type: typeof ADD_TO_WATCHLIST;
  payload: AddToWatchlistPayload;
}

export interface AddToWatchlistSuccessAction {
  type: typeof ADD_TO_WATCHLIST_SUCCESS;
  payload: any;
}

export interface AddToWatchlistFailureAction {
  type: typeof ADD_TO_WATCHLIST_FAILURE;
  payload: string;
}

export interface GetRatedMoviesAction {
  type: typeof GET_RATED_MOVIES;
  payload: any;
}

export interface GetRatedMoviesSuccessAction {
  type: typeof GET_RATED_MOVIES_SUCCESS;
  payload: any;
}

export interface GetRatedMoviesFailureAction {
  type: typeof GET_RATED_MOVIES_FAILURE;
  payload: string;
}

export interface GetWatchListAction {
  type: typeof GET_WATCHLIST;
  payload: any;
}
export interface GetWatchListSuccessAction {
  type: typeof GET_WATCHLIST_SUCCESS;
  payload: any;
}
export interface GetWatchListFailureAction {
  type: typeof GET_WATCHLIST_FAILURE;
  payload: string;
}
export type MovieActionTypes =
  | AddRatingAction
  | AddRatingSuccessAction
  | AddRatingFailureAction
  | DeleteRatingAction
  | DeleteRatingSuccessAction
  | DeleteRatingFailureAction
  | AddToWatchlistAction
  | AddToWatchlistSuccessAction
  | AddToWatchlistFailureAction
  | GetRatedMoviesAction
  | GetRatedMoviesSuccessAction
  | GetRatedMoviesFailureAction
  | GetWatchListAction
  | GetWatchListSuccessAction
  | GetWatchListFailureAction;
