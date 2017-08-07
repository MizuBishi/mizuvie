export const SHOW_LIST = 'SHOW_LIST';
export const NEW_LIST = 'NEW_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const NEW_MOVIE = 'NEW_MOVIE';
export const HOME_OVERVIEW = 'HOME_OVERVIEW';
export const SET_NEW_MOVIE_NAME = 'SET_NEW_MOVIE_NAME';


// parameter "list" is e.g. "a" for the "TV Series" list
export const ShowList = list => {
  return {
    type: SHOW_LIST,
    list: list
  }
}

export const NewList = () => {
  return {
    type: NEW_LIST,
  }
}

export const EditList = list => {
  return {
    type: EDIT_LIST,
    list: list
  }
}

export const NewMovie = () => {
  return {
    type: NEW_MOVIE,
  }
}

export const HomeOverview = () => {
  return {
    type: HOME_OVERVIEW,
  }
}

export const SetNewMovieName = (movie) => {
  return {
    type: SET_NEW_MOVIE_NAME,
    movie: movie
  }
}
