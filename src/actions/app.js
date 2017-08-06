export const SHOW_LIST = 'SHOW_LIST';
export const NEW_LIST = 'NEW_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const NEW_MOVIE = 'NEW_MOVIE';


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
