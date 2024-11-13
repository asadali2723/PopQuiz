// sagas/trendingMoviesSaga.ts
import {HTTP_STATUS} from '@constants';
import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  HIDE_LOADER,
  SHOW_LOADER,
} from '@redux/actionType';
import {getTrendingMovies} from '@utils/apis';
import {call, put, takeLatest} from 'redux-saga/effects';

interface FetchTrendingMoviesResponse {
  data: {
    page: number;
    results: Array<any>;
    total_pages: number;
    total_results: number;
  };
  status: number;
}

function* fetchTrendingMoviesSaga(action: {type: string; payload: number}) {
  try {
    const page = action.payload || 1;
    if (page === 1) {
      yield put({type: SHOW_LOADER});
    }
    const response: FetchTrendingMoviesResponse = yield call(
      getTrendingMovies,
      page,
    );
    const {data = null, status} = response;
    if (status === HTTP_STATUS.OK && data) {
      yield put({
        type: GET_MOVIES_SUCCESS,
        payload: {
          page: data?.page,
          results: data?.results,
          total_pages: data?.total_pages,
        },
      });
    } else {
      yield put({
        type: GET_MOVIES_FAILURE,
        payload: 'Failed to fetch trending movies',
      });
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({type: HIDE_LOADER});
    yield put({
      type: GET_MOVIES_FAILURE,
      payload: error.message,
    });
  }
}

export function* watchTrendingMovies() {
  yield takeLatest(GET_MOVIES_REQUEST, fetchTrendingMoviesSaga);
}
