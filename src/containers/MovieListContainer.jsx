import React from 'react';
import { connect } from 'react-redux';

import { NewMovie } from '../actions/app'
import MovieList from '../components/MovieList';


const MovieListContainer = (props) => {
  if (props.shown) {
    return <MovieList
      title={props.movieList.title}
      description={props.movieList.description}
      movies={props.movieList.movies}
      onNewMovieClick={props.onNewMovieClick}
      newMovie={props.newMovie}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'list',
    movieList: state.lists[state.app.currentList],
    newMovie: state.app.newMovie === true
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewMovieClick: () => dispatch(NewMovie()),
  }
}

const ConnectedMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)

export default ConnectedMovieListContainer
