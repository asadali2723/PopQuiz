import {
  TrendingMoviesActionTypes,
  TrendingMoviesState,
} from '@_types/movies.type';
import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from '@redux/actionType';

const initialState: TrendingMoviesState = {
  page: 1,
  total_pages: 1,
  results: [],
  loading: false,
  error: null,
};

const moviesReducer = (
  state = initialState,
  action: TrendingMoviesActionTypes,
): TrendingMoviesState => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {...state, loading: true, error: null};
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        results: [...state.results, ...action.payload.results],
      };
    case GET_MOVIES_FAILURE:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default moviesReducer;
