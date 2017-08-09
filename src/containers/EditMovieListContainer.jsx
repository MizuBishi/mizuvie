import React from 'react';
import { connect } from 'react-redux';

import { EditList, EditListTitle, HomeOverview } from '../actions/app'
import EditMovieList from '../components/EditMovieList';


const EditMovieListContainer = (props) => {
  if (props.shown) {
    return <EditMovieList
      title={props.title}
      description={props.movieList.description}
      selectedColor={props.movieList.colors}
      editListTitle={props.editListTitle}
      onHomeOverviewClick={props.onHomeOverviewClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'edit',
    movieList: state.lists[state.app.currentList],
    title: state.app.newMovieListTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    editListTitle: (value) => dispatch(EditListTitle(value)),
    onHomeOverviewClick: () => dispatch(HomeOverview())
  }
}

const ConnectedEditMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovieListContainer)

export default ConnectedEditMovieListContainer
