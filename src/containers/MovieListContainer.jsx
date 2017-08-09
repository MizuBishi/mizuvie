import React from 'react';
import { connect } from 'react-redux';

import { NewMovie, SetNewMovieName, HomeOverview, CancelNewMovie,
EditListTitle, DeleteMovie } from '../actions/app'
import MovieList from '../components/MovieList';



const MovieListContainer = (props) => {
  if (props.shown) {
    return <MovieList
      title={props.movieList.title}
      description={props.movieList.description}
      movies={props.movieList.movies}
      currentList={props.currentList}

      onNewMovieClick={props.onNewMovieClick}
      onHomeOverviewClick={props.onHomeOverviewClick}
      onCancelNewMovieClick={props.onCancelNewMovieClick}
      newMovie={props.newMovie}
      newMovieName={props.newMovieName}
      setNewMovieName={props.setNewMovieName}
      onDeleteMovieClick={props.onDeleteMovieClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'list',
    currentList: state.app.currentList,
    movieList: state.lists[state.app.currentList],
    newMovie: state.app.newMovie === true,
    newMovieName: state.app.newMovieTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNewMovieClick: () => dispatch(NewMovie()),
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    onCancelNewMovieClick: () => dispatch(CancelNewMovie()),
    setNewMovieName: (value) => dispatch(SetNewMovieName(value)),
    onDeleteMovieClick: (list, movie) => dispatch(DeleteMovie(list, movie)),
  }
}

const ConnectedMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer)

export default ConnectedMovieListContainer
