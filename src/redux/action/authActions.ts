import {
  CREATE_SESSION,
  CREATE_SESSION_FAIL,
  CREATE_SESSION_SUCCESS,
  GET_PROFILE,
  GET_REQUEST_TOKEN,
  GET_REQUEST_TOKEN_FAIL,
  GET_REQUEST_TOKEN_SUCCESS,
  LOGOUT,
  VALIDATE_TOKEN,
  VALIDATE_TOKEN_FAIL,
  VALIDATE_TOKEN_SUCCESS,
} from '@redux/actionType';

export const getRequestToken = (data: {
  username: string;
  password: string;
}) => ({
  type: GET_REQUEST_TOKEN,
  data: data,
});

export const validateToken = (data: {
  username: string;
  password: string;
  request_token: string;
}) => ({
  data: data,
  type: VALIDATE_TOKEN,
});

export const createSession = (request_token: string) => ({
  data: request_token,
  type: CREATE_SESSION,
});
// Success actions
export const getRequestTokenSuccess = (data: any) => ({
  type: GET_REQUEST_TOKEN_SUCCESS,
  data,
});

export const validateTokenSuccess = (data: any) => ({
  type: VALIDATE_TOKEN_SUCCESS,
  data,
});

export const createSessionSuccess = (data: any) => ({
  type: CREATE_SESSION_SUCCESS,
  data,
});

// Failure actions
export const getRequestTokenFail = (error: any) => ({
  type: GET_REQUEST_TOKEN_FAIL,
  error,
});

export const validateTokenFail = (error: any) => ({
  type: VALIDATE_TOKEN_FAIL,
  error,
});

export const createSessionFail = (error: any) => ({
  type: CREATE_SESSION_FAIL,
  error,
});
export const logout = () => ({
  type: LOGOUT,
});
export const getProfile = () => ({
  type: GET_PROFILE,
});
