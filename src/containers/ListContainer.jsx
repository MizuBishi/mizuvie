import React from 'react';
import { connect } from 'react-redux';

import ListOfMovies from '../components/ListOfMovies';

import { NewMovie, SetNewMovieName, CancelNewMovie, DeleteMovie, CheckViewedMovie } from '../actions/list'
import { HomeOverview } from '../actions/app'


const ListContainer = (props) => {
  if (props.shown) {
    return <ListOfMovies
      title={props.List.title}
      description={props.List.description}
      movies={props.List.movies}
      currentList={props.currentList}

      onNewMovieClick={props.onNewMovieClick}
      onHomeOverviewClick={props.onHomeOverviewClick}
      onCancelNewMovieClick={props.onCancelNewMovieClick}
      newMovie={props.newMovie}
      newMovieName={props.newMovieName}
      setNewMovieName={props.setNewMovieName}
      onDeleteMovieClick={props.onDeleteMovieClick}
      onCheckViewedMovie={props.onCheckViewedMovie}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'list',
    currentList: state.app.currentList,
    List: state.lists[state.app.currentList],
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
    onCheckViewedMovie: (value, list, movie) => dispatch(CheckViewedMovie(value, list, movie)),
  }
}

const ConnectedListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer)

export default ConnectedListContainer
