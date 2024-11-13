// reducers/authReducer.ts
import {
  CREATE_SESSION,
  GET_REQUEST_TOKEN,
  VALIDATE_TOKEN,
  GET_REQUEST_TOKEN_SUCCESS,
  VALIDATE_TOKEN_SUCCESS,
  CREATE_SESSION_SUCCESS,
  GET_REQUEST_TOKEN_FAIL,
  VALIDATE_TOKEN_FAIL,
  CREATE_SESSION_FAIL,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_PROFILE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT,
} from '@redux/actionType';

export interface AuthState {
  requestToken: string | null;
  sessionId: {success: boolean; session_id: string} | null;
  isRequestTokenLoading: boolean;
  isSessionLoading: boolean;
  isValidationLoading: boolean;
  validationError: string | null;
  validationSuccess: boolean;
  profile: {
    id: number;
    name: string;
    username: string;
    avatar: {
      gravatar: {hash: string};
      tmdb: {avatar_path: string | null};
    };
    iso_639_1: string;
    iso_3166_1: string;
    include_adult: boolean;
  } | null;
  isLoggingOut: boolean;
  isFetchingProfile: boolean;
  logoutError: string | null;
  profileError: string | null;
}

const initialState: AuthState = {
  requestToken: null,
  sessionId: null,
  isRequestTokenLoading: false,
  isSessionLoading: false,
  isValidationLoading: false,
  validationError: null,
  validationSuccess: false,
  profile: null,
  isLoggingOut: false,
  isFetchingProfile: false,
  logoutError: null,
  profileError: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case GET_REQUEST_TOKEN:
      return {...state, isRequestTokenLoading: true};
    case GET_REQUEST_TOKEN_SUCCESS:
      return {
        ...state,
        isRequestTokenLoading: false,
        requestToken: action.data,
      };
    case GET_REQUEST_TOKEN_FAIL:
      return {
        ...state,
        isRequestTokenLoading: false,
        validationError: action.error,
      };

    case VALIDATE_TOKEN:
      return {...state, isValidationLoading: true};
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isValidationLoading: false,
        validationSuccess: true,
        validationError: null,
      };
    case VALIDATE_TOKEN_FAIL:
      return {
        ...state,
        isValidationLoading: false,
        validationError: action.error,
      };

    case CREATE_SESSION:
      return {...state, isSessionLoading: true};
    case CREATE_SESSION_SUCCESS:
      return {...state, isSessionLoading: false, sessionId: action.data};
    case CREATE_SESSION_FAIL:
      return {...state, isSessionLoading: false, validationError: action.error};
    case LOGOUT:
      return {...state, isLoggingOut: true};
    case LOGOUT_SUCCESS:
      return {...state, isLoggingOut: false, sessionId: null};
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: action.error,
        sessionId: null,
      };

    case GET_PROFILE:
      return {...state, isFetchingProfile: true};
    case GET_PROFILE_SUCCESS:
      return {...state, isFetchingProfile: false, profile: action.data};
    case GET_PROFILE_FAIL:
      return {...state, isFetchingProfile: false, profileError: action.error};

    default:
      return state;
  }
};

export default authReducer;
