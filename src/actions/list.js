export const NEW_MOVIE = 'NEW_MOVIE';
export const SET_NEW_MOVIE_NAME = 'SET_NEW_MOVIE_NAME';
export const CANCEL_NEW_MOVIE = 'CANCEL_NEW_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const CHECK_VIEWED_MOVIE = 'CHECK_VIEWED_MOVIE';


export const NewMovie = () => {
  return {
    type: NEW_MOVIE,
  }
}
export const SetNewMovieName = (movie) => {
  return {
    type: SET_NEW_MOVIE_NAME,
    movie: movie
  }
}
export const CancelNewMovie = () => {
  return {
    type: CANCEL_NEW_MOVIE,
  }
}
export const DeleteMovie = (list, movie) => {
  return {
    type: DELETE_MOVIE,
    list: list,
    movie: movie
  }
}
export const CheckViewedMovie = (list, movie) => {
  return {
    type: CHECK_VIEWED_MOVIE,
    list: list,
    movie: movie
  }
}
