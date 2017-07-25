import React from 'react';
import { connect } from 'react-redux';

import MovieList from '../components/MovieList';


const MovieListContainer = (props) => {
  if (props.shown) {
    return <MovieList
      title={props.movieList.title}
      description={props.movieList.description}
      movies={props.movieList.movies}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'list',
    movieList: state.lists[state.app.currentList]
  }
}

const mapDispatchToProps = {}

const ConnectedMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)

export default ConnectedMovieListContainer
