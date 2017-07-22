import React from 'react';
import NewMovieList from '../components/NewMovieList';
import { connect } from 'react-redux';

const NewMovieListContainer = (props) => {
  if (props.newMovie) {
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
    newMovie: state.app.newMovie,
    newMovieTitle: state.app.newMovieTitle,
    newMovieDescription: state.app.newMovieDescription,
    newMovieColor: state.app.newMovieColor
  }
}

const mapDispatchToProps = {}

const ConnectedNewMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovieListContainer)

export default ConnectedNewMovieListContainer
