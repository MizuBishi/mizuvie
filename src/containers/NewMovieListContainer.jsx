import React from 'react';
import { connect } from 'react-redux';

import { NewList, CancelNewList, SetNewListTitle,
SetNewListDescription } from '../actions/app'
import NewMovieList from '../components/NewMovieList';


const NewMovieListContainer = (props) => {
  if (props.shown) {
    return <NewMovieList
      title={props.newMovieTitle}
      description={props.newMovieDescription}
      selectedColor={props.newMovieColor}
      
      onCancelNewListClick={props.onCancelNewListClick}
      setNewListTitle={props.setNewListTitle}
      setNewListDescription={props.setNewListDescription}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'new',
    newMovie: state.app.newMovie,
    newMovieTitle: state.app.newListTitle,
    newMovieDescription: state.app.newListDescription,
    newMovieColor: state.app.newListColor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCancelNewListClick: () => dispatch(CancelNewList()),
    setNewListTitle: (value) => dispatch(SetNewListTitle(value)),
    setNewListDescription: (value) => dispatch(SetNewListDescription(value))
  }
}
const ConnectedNewMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovieListContainer)

export default ConnectedNewMovieListContainer
