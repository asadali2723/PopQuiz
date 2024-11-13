export enum KEYBOARD_TYPE {
  NumberPad = 'number-pad',
  EmailAddress = 'email-address',
  Default = 'default',
}

export enum RETURN_KEY_TYPE {
  Done = 'done',
  Next = 'next',
  Enter = 'enter',
  Search = 'search',
  Send = 'send',
}
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};
export const STORAGE_KEY = {
  isLogin: 'isLogin',
};