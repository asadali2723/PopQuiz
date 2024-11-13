import {API, API_CATEGORY} from '@constants';
import {store} from '@redux/store';
import axiosService from '@services/axiosService';

// Get request token
export const getRequestTokenApi = () => {
  return axiosService.get(API.requestToken);
};

// Validate token with username and password
export const validateTokenApi = (data: {
  username: string;
  password: string;
  request_token: string;
}) => {
  return axiosService.post(API.validateToken, data);
};

//  Create a session ID
export const createSessionApi = (data: {request_token: string}) => {
  return axiosService.post(API.createSession, data);
};

//Get Trending Movies
export const getTrendingMovies = (page: number) => {
  return axiosService.get(`${API.trendingMovies}&page=${page}`);
};

export const addRating = async (movieId: number, rating: number) => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.post(
    `${API.movie}${movieId}/rating?session_id=${sessionId}`,
    {
      value: rating,
    },
  );
};
export const deleteRating = async (movieId: number) => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.delete(
    `${API.movie}${movieId}/rating?session_id=${sessionId}`,
  );
};
export const getRatedMovies = async () => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.get(
    `${API.account}21626295/rated/movies?session_id=${sessionId}`,
  );
};

export const addToWatchlist = async (movieId: number) => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.post(
    `${API.account}21626295/watchlist?session_id=${sessionId}`,
    {
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    },
  );
};
export const getWatchlist = async () => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.get(
    `${API.account}21626295/watchlist/movies?language=en-US&page=1&session_id=${sessionId}&sort_by=created_at.asc`,
  );
};

export const logoutApi = () => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.delete(`${API_CATEGORY.authentication}session`, {
    data: {
      session_id: sessionId,
    },
  });
};
export const getProfileApi = async () => {
  const sessionId = store?.getState()?.auth?.sessionId?.session_id ?? '';
  return axiosService.get(`${API.account}21626295?session_id=${sessionId}`);
};
