export const EDIT_LIST_TITLE = 'EDIT_LIST_TITLE';
export const EDIT_LIST_DESCRIPTION = 'EDIT_LIST_DESCRIPTION';
export const SAVE_EDIT_LIST = 'SAVE_EDIT_LIST';
export const CANCEL_EDIT_LIST = 'CANCEL_EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';


export const EditListTitle = (list) => {
  return {
    type: EDIT_LIST_TITLE,
    list: list
  }
}
export const EditListDescription = (list) => {
  return {
    type: EDIT_LIST_DESCRIPTION,
    list: list
  }
}
export const SaveEditList = (list) => {
  return {
    type: SAVE_EDIT_LIST,
    list: list,
  }
}
export const CancelEditList = () => {
  return {
    type: CANCEL_EDIT_LIST,
  }
}
export const DeleteList = (list) => {
  return {
    type: DELETE_LIST,
    list: list,
  }
}
