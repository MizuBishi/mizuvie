import React from 'react';
import { connect } from 'react-redux';

import { HomeOverview } from '../actions/app'
import { EditList, EditListTitle } from '../actions/app'
import EditMovieList from '../components/EditMovieList';


const EditMovieListContainer = (props) => {
  if (props.shown) {
    return <EditMovieList
      title={props.movieList.title}
      description={props.movieList.description}
      selectedColor={props.movieList.colors}
      editListTitle={props.editListTitle}
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    editListTitle: (value) => dispatch(EditListTitle(value)),
  }
}

const ConnectedEditMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovieListContainer)

export default ConnectedEditMovieListContainer
