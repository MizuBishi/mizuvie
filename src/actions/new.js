export const NEW_LIST = 'NEW_LIST';
export const SET_NEW_LIST_TITLE = 'SET_NEW_LIST_TITLE';
export const SET_NEW_LIST_DESCRIPTION = 'SET_NEW_LIST_DESCRIPTION';
export const CANCEL_NEW_LIST = 'CANCEL_NEW_LIST';


export const NewList = () => {
  return {
    type: NEW_LIST,
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
export const CancelNewList = () => {
  return {
    type: CANCEL_NEW_LIST,
  }
}
