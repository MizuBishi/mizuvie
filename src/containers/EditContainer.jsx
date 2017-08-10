import React from 'react';
import { connect } from 'react-redux';

import Edit from '../components/Edit';

import { EditListTitle, EditListDescription, SaveEditList, CancelEditList, DeleteList } from '../actions/edit'
import { HomeOverview } from '../actions/app'


const EditContainer = (props) => {
  if (props.shown) {
    return <Edit
      title={props.title}
      description={props.movieList.description}
      selectedColor={props.movieList.colors}
      currentList={props.currentList}

      editListTitle={props.editListTitle}
      editListDescription={props.editListDescription}
      onHomeOverviewClick={props.onHomeOverviewClick}
      onSaveEditListClick={props.onSaveEditListClick}
      onCancelEditListClick={props.onCancelEditListClick}
      onDeleteListClick={props.onDeleteListClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'edit',
    currentList: state.app.currentList,
    movieList: state.lists[state.app.currentList],
    title: state.app.newListTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    editListTitle: (value) => dispatch(EditListTitle(value)),
    editListDescription: (value) => dispatch(EditListDescription(value)),
    onSaveEditListClick: (list) => dispatch(SaveEditList(list)),
    onCancelEditListClick: () => dispatch(CancelEditList()),
    onDeleteListClick: (list) => dispatch(DeleteList(list)),
  }
}

const ConnectedEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContainer)

export default ConnectedEditContainer
