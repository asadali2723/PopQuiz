export enum API_CATEGORY {
  authentication = 'authentication/',
  trending = 'trending',
}
export enum API {
  requestToken = `${API_CATEGORY.authentication}token/new`,
  validateToken = `${API_CATEGORY.authentication}token/validate_with_login`,
  createSession = `${API_CATEGORY.authentication}session/new`,
  trendingMovies = `${API_CATEGORY.trending}/movie/day?language=en-US`,
  movie = 'movie/',
  account = 'account/',
}
