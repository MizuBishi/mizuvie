export const SHOW_LIST = 'SHOW_LIST';
export const NEW_LIST = 'NEW_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const NEW_MOVIE = 'NEW_MOVIE';
export const HOME_OVERVIEW = 'HOME_OVERVIEW';
export const EDIT_LIST_TITLE = 'EDIT_LIST_TITLE';
export const SET_NEW_MOVIE_NAME = 'SET_NEW_MOVIE_NAME';
export const CANCEL_NEW_MOVIE = 'CANCEL_NEW_MOVIE';
export const CANCEL_NEW_LIST = 'CANCEL_NEW_LIST';
export const SET_NEW_LIST_TITLE = 'SET_NEW_LIST_TITLE';
export const SET_NEW_LIST_DESCRIPTION = 'SET_NEW_LIST_DESCRIPTION';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SAVE_EDIT_LIST = 'SAVE_EDIT_LIST';

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

export const EditListTitle = (list) => {
  return {
    type: EDIT_LIST_TITLE,
    list: list
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

export const CancelNewList = () => {
  return {
    type: CANCEL_NEW_LIST,
  }
}

export const SetNewListTitle = (title) => {
  return {
    type: SET_NEW_LIST_TITLE,
    title: title
  }
}

export const SetNewListDescription = (description) => {
  return {
    type: SET_NEW_LIST_DESCRIPTION,
    description: description
  }
}

export const DeleteMovie = (list, movie) => {
  return {
    type: DELETE_MOVIE,
    list: list,
    movie: movie
  }
}

export const SaveEditList = (list) => {
  return {
    type: SAVE_EDIT_LIST,
    list: list,
  }
}
