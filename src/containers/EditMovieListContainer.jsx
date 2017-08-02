import React from 'react';
import { connect } from 'react-redux';

import EditMovieList from '../components/EditMovieList';


const EditMovieListContainer = (props) => {
  if (props.shown) {
    return <EditMovieList
      title={props.movieList.title}
      description={props.movieList.description}
      selectedColor={props.movieList.colors}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'edit',
    movieList: state.lists[state.app.currentList]
  }
}

const mapDispatchToProps = {}

const ConnectedEditMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovieListContainer)

export default ConnectedEditMovieListContainer
