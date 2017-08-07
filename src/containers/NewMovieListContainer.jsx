import React from 'react';
import { connect } from 'react-redux';

import { NewList, CancelNewList } from '../actions/app'
import NewMovieList from '../components/NewMovieList';


const NewMovieListContainer = (props) => {
  if (props.shown) {
    return <NewMovieList
      title={props.newMovieTitle}
      description={props.newMovieDescription}
      selectedColor={props.newMovieColor}
      onCancelNewListClick={props.onCancelNewListClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'new',
    newMovie: state.app.newMovie,
    newMovieTitle: state.app.newMovieListTitle,
    newMovieDescription: state.app.newMovieListDescription,
    newMovieColor: state.app.newMovieListColor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCancelNewListClick: () => dispatch(CancelNewList()),
  }
}
const ConnectedNewMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovieListContainer)

export default ConnectedNewMovieListContainer
