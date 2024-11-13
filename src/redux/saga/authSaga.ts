// sagas/authSagas.ts
import {takeLatest, call, put, CallEffect, PutEffect} from 'redux-saga/effects';
import {
  GET_REQUEST_TOKEN,
  VALIDATE_TOKEN,
  CREATE_SESSION,
  SHOW_LOADER,
  HIDE_LOADER,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE,
} from '@redux/actionType';
import {
  getRequestTokenSuccess,
  getRequestTokenFail,
  validateTokenSuccess,
  validateTokenFail,
  createSessionSuccess,
  createSessionFail,
} from '@redux/action/authActions';
import {
  getRequestTokenApi,
  validateTokenApi,
  createSessionApi,
  logoutApi,
  getProfileApi,
} from '@utils/apis';
import {
  CreateSessionAction,
  GetRequestTokenAction,
  ValidateTokenAction,
} from '@_types/redux.type';
import {navigate} from '@services/navigationService';
import {errorTexts, HTTP_STATUS, RouteName, STORAGE_KEY} from '@constants';
import {errorMessage, storeDataLocally} from '@utils/helperFunction';

// Watchers
function* watchGetRequestToken(
  action: GetRequestTokenAction,
): Generator<CallEffect | PutEffect> {
  try {
    yield put({type: SHOW_LOADER});
    const response = yield call(getRequestTokenApi);
    if (
      response?.status === HTTP_STATUS.OK ||
      response?.status === HTTP_STATUS.CREATED
    ) {
      yield put(getRequestTokenSuccess(response.data));
      const request_token = response.data.request_token;
      const {username, password} = action.data;
      yield put({
        type: VALIDATE_TOKEN,
        data: {username, password, request_token},
      });
    } else {
      yield put({type: HIDE_LOADER});
      yield put(getRequestTokenFail(errorMessage(response)));
    }
  } catch (error: any) {
    yield put({type: HIDE_LOADER});
    yield put(
      getRequestTokenFail(error.message || errorTexts.somthingWentWrong),
    );
  }
}

function* watchValidateToken(
  action: ValidateTokenAction,
): Generator<CallEffect | PutEffect> {
  try {
    const {username, password, request_token} = action.data;
    const response = yield call(validateTokenApi, {
      username,
      password,
      request_token,
    });
    if (
      response?.status === HTTP_STATUS.OK ||
      response?.status === HTTP_STATUS.CREATED
    ) {
      yield put(validateTokenSuccess(response.data));
      yield put({
        type: CREATE_SESSION,
        request_token: request_token,
      });
    } else {
      yield put({type: HIDE_LOADER});
      yield put(validateTokenFail(errorMessage(response)));
    }
  } catch (error: any) {
    yield put({type: HIDE_LOADER});
    yield put(validateTokenFail(error.message || errorTexts.somthingWentWrong));
  }
}

function* watchCreateSession(
  action: CreateSessionAction,
): Generator<CallEffect | PutEffect> {
  try {
    const response = yield call(createSessionApi, {
      request_token: action.request_token,
    });
    if (
      response?.status === HTTP_STATUS.OK ||
      response?.status === HTTP_STATUS.CREATED
    ) {
      yield put(createSessionSuccess(response.data));
      storeDataLocally(STORAGE_KEY.isLogin, true);
      navigate(RouteName.Dashboard_Screen);
    } else {
      yield put(createSessionFail(errorMessage(response)));
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({type: HIDE_LOADER});
    yield put(createSessionFail(error.message || errorTexts.somthingWentWrong));
  }
}
function* watchLogout(): Generator<CallEffect | PutEffect> {
  try {
    yield put({type: SHOW_LOADER});

    const response = yield call(logoutApi);
    if (
      response?.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: LOGOUT_SUCCESS});
    } else {
      yield put({type: LOGOUT_FAILURE, error: errorMessage(response)});
    }
    navigate(RouteName.Login_Screen);
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({
      type: LOGOUT_FAILURE,
      error: error.message || 'Something went wrong',
    });
    yield put({type: HIDE_LOADER});
    navigate(RouteName.Login_Screen);
  }
}

function* watchGetProfile(): Generator<CallEffect | PutEffect> {
  try {
    yield put({type: SHOW_LOADER});
    const response = yield call(getProfileApi);
    if (
      response?.status === HTTP_STATUS.OK ||
      response.status === HTTP_STATUS.CREATED
    ) {
      yield put({type: GET_PROFILE_SUCCESS, data: response.data});
    } else {
      yield put({type: GET_PROFILE_FAIL, error: errorMessage(response)});
    }
    yield put({type: HIDE_LOADER});
  } catch (error: any) {
    yield put({
      type: GET_PROFILE_FAIL,
      error: error.message || 'Something went wrong',
    });
    yield put({type: HIDE_LOADER});
  }
}

// Root Saga
export default function* authSaga() {
  yield takeLatest(GET_REQUEST_TOKEN, watchGetRequestToken);
  yield takeLatest(VALIDATE_TOKEN, watchValidateToken);
  yield takeLatest(CREATE_SESSION, watchCreateSession);
  yield takeLatest(LOGOUT, watchLogout);
  yield takeLatest(GET_PROFILE, watchGetProfile);
}
