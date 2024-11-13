// reducers/loaderReducer.js
import {SHOW_LOADER, HIDE_LOADER} from '@redux/actionType';
export interface LoaderState {
  isLoading: boolean;
}
const initialState: LoaderState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action: any): LoaderState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loaderReducer;
