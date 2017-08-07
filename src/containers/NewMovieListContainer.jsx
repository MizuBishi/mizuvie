import React from 'react';
import { connect } from 'react-redux';

import { NewList } from '../actions/app'
import NewMovieList from '../components/NewMovieList';


const NewMovieListContainer = (props) => {
  if (props.shown) {
    return <NewMovieList
      title={props.newMovieTitle}
      description={props.newMovieDescription}
      selectedColor={props.newMovieColor}
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

const mapDispatchToProps = {}

const ConnectedNewMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovieListContainer)

export default ConnectedNewMovieListContainer
