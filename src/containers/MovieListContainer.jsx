import React from 'react';
import MovieList from '../stories/MovieList';
import { connect } from 'react-redux';

const MovieListContainer = (props) => (
  <MovieList
    title={props.movieList.title}
    description={props.movieList.description}
    movies={props.movieList.movies}
    />
)

const mapStateToProps = (state, ownProps) => {
  return {
    movieList: state.lists[state.app.currentList]
  }
}

const mapDispatchToProps = {}

const ConnectedMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)

export default ConnectedMovieListContainer
