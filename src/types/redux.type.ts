import {
  CREATE_SESSION,
  GET_REQUEST_TOKEN,
  VALIDATE_TOKEN,
} from '@redux/actionType';

export interface GetRequestTokenAction {
  type: typeof GET_REQUEST_TOKEN;
  data: {
    username: string;
    password: string;
  };
}

export interface ValidateTokenAction {
  type: typeof VALIDATE_TOKEN;
  data: {
    username: string;
    password: string;
    request_token: string;
  };
}

export interface CreateSessionAction {
  type: typeof CREATE_SESSION;
  request_token: string;
}

export type AuthAction =
  | GetRequestTokenAction
  | ValidateTokenAction
  | CreateSessionAction;
