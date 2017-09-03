export const SET_NEW_LIST_TITLE = 'SET_NEW_LIST_TITLE';
export const SET_NEW_LIST_DESCRIPTION = 'SET_NEW_LIST_DESCRIPTION';
export const SAVE_NEW_LIST = 'SAVE_NEW_LIST';
export const CANCEL_NEW_LIST = 'CANCEL_NEW_LIST';


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
export const SaveNewList = (list) => {
  return {
    type: SAVE_NEW_LIST,
    list: list,
  }
}
export const CancelNewList = () => {
  return {
    type: CANCEL_NEW_LIST,
  }
}
