export const SHOW_LIST = 'SHOW_LIST';
export const NEW_LIST = 'NEW_LIST';

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
