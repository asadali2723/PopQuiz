import {all, fork} from 'redux-saga/effects';
import authSaga from './authSaga';
import {watchTrendingMovies} from './moviesSaga';
import {watchMovieActions} from './ratingSaga';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(watchTrendingMovies),
    fork(watchMovieActions),
  ]);
}
