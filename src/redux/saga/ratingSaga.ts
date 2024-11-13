// ratingSaga.ts
import {MovieActionTypes} from '@_types/movies.type';
import {errorTexts, HTTP_STATUS, popUpType} from '@constants';
import {
  ADD_TO_WATCHLIST,
  ADD_TO_WATCHLIST_FAILURE,
  ADD_TO_WATCHLIST_SUCCESS,
  DELETE_RATING,
  DELETE_RATING_FAILURE,
  DELETE_RATING_SUCCESS,
  GET_RATED_MOVIES,
  GET_RATED_MOVIES_FAILURE,
  GET_RATED_MOVIES_SUCCESS,
  GET_WATCHLIST,
  GET_WATCHLIST_FAILURE,
  GET_WATCHLIST_SUCCESS,
  HIDE_LOADER,
  POST_RATING_FAILURE,
  POST_RATING_REQUEST,
  POST_RATING_SUCCESS,
  SHOW_LOADER,
} from '@redux/actionType';
import {
  addRating,
  addToWatchlist,
  deleteRating,
  getRatedMovies,
  getWatchlist,
} from '@utils/apis';
import {AxiosResponse} from 'axios';
import {showMessage} from 'react-native-flash-message';
import {takeEvery, call, put} from 'redux-saga/effects';

function* postRating(action: MovieActionTypes) {
  try {
    yield put({type: SHOW_LOADER});
    const {movieId, rating} = action.payload;
    const response: AxiosResponse = yield call(addRating, movieId, rating);
    if (
      response?.status === HTTP_STATUS.OK ||
      response?.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: POST_RATING_SUCCESS, payload: response.data});
      showMessage({
        message: 'Rating added successfully!',
        type: popUpType.success,
      });
      yield put({type: GET_RATED_MOVIES});
    } else {
      yield put({type: POST_RATING_FAILURE, payload: response.data});
      showMessage({
        message: response?.data?.status_message || 'Failed to add rating.',
        type: popUpType.danger,
      });
      yield put({type: HIDE_LOADER});
    }
  } catch (error: any) {
    yield put({type: HIDE_LOADER});
    yield put({
      type: POST_RATING_FAILURE,
      payload: error?.message || errorTexts.somthingWentWrong,
    });
    showMessage({
      message: 'Failed to add rating.',
      type: popUpType.danger,
    });
  }
}
// Delete Rating
function* deleteRatingSaga(action: MovieActionTypes) {
  try {
    yield put({type: SHOW_LOADER});
    const {movieId} = action.payload;
    const response: AxiosResponse = yield call(deleteRating, movieId);
    if (
      response.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: DELETE_RATING_SUCCESS, payload: response.data});
      yield put({type: GET_RATED_MOVIES});
      showMessage({
        message: 'Rating deleted successfully!',
        type: popUpType.success,
      });
    } else {
      yield put({type: DELETE_RATING_FAILURE, payload: response.data});
      showMessage({
        message: 'Failed to delete rating.',
        type: popUpType.danger,
      });
      yield put({type: HIDE_LOADER});
    }
  } catch (error: any) {
    yield put({
      type: DELETE_RATING_FAILURE,
      payload: error?.message || errorTexts.somthingWentWrong,
    });
    yield put({type: HIDE_LOADER});
    showMessage({
      message: 'Failed to delete rating.',
      type: popUpType.danger,
    });
  }
}

// Get Rated Movies
function* getRatedMoviesSaga() {
  try {
    yield put({type: SHOW_LOADER});
    const response: AxiosResponse = yield call(getRatedMovies);

    if (
      response.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: GET_RATED_MOVIES_SUCCESS, payload: response.data});
    } else {
      yield put({
        type: GET_RATED_MOVIES_FAILURE,
        payload: 'Failed to fetch rated movies.',
      });
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({
      type: GET_RATED_MOVIES_FAILURE,
      payload: error?.message || errorTexts.somthingWentWrong,
    });
    yield put({type: HIDE_LOADER});
  }
}

// Add to Watchlist
function* addToWatchlistSaga(action: MovieActionTypes) {
  try {
    yield put({type: SHOW_LOADER});
    const {movieId} = action.payload;
    const response: AxiosResponse = yield call(addToWatchlist, movieId);
    if (
      response.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: ADD_TO_WATCHLIST_SUCCESS, payload: response.data});
      showMessage({
        message: 'Movie added to watchlist!',
        type: popUpType.success,
      });
    } else {
      yield put({
        type: ADD_TO_WATCHLIST_FAILURE,
        payload: 'Failed to add to watchlist.',
      });
      showMessage({
        message: 'Failed to add movie to watchlist.',
        type: popUpType.danger,
      });
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({
      type: ADD_TO_WATCHLIST_FAILURE,
      payload: error?.message || errorTexts.somthingWentWrong,
    });
    yield put({type: HIDE_LOADER});
    showMessage({
      message: 'Failed to add movie to watchlist.',
      type: popUpType.danger,
    });
  }
}

//Get Watchlist
function* getWatchlistSaga() {
  try {
    yield put({type: SHOW_LOADER});
    const response: AxiosResponse = yield call(getWatchlist);
    console.log(JSON.stringify(response?.data), 'response');

    if (
      response.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: GET_WATCHLIST_SUCCESS, payload: response.data});
    } else {
      yield put({
        type: GET_WATCHLIST_FAILURE,
        payload: 'Failed to fetch watchlist movies.',
      });
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({
      type: GET_WATCHLIST_FAILURE,
      payload: error?.message || errorTexts.somthingWentWrong,
    });
    yield put({type: HIDE_LOADER});
  }
}

export function* watchMovieActions() {
  yield takeEvery(POST_RATING_REQUEST, postRating);
  yield takeEvery(DELETE_RATING, deleteRatingSaga);
  yield takeEvery(GET_RATED_MOVIES, getRatedMoviesSaga);
  yield takeEvery(ADD_TO_WATCHLIST, addToWatchlistSaga);
  yield takeEvery(GET_WATCHLIST, getWatchlistSaga);
}
