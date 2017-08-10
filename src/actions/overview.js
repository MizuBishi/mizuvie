export const SHOW_LIST = 'SHOW_LIST';
export const NEW_LIST = 'NEW_LIST';
export const EDIT_LIST = 'EDIT_LIST';


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
