import React from 'react';
import { connect } from 'react-redux';

import { EditList, EditListTitle, HomeOverview, SaveEditList } from '../actions/app'
import EditMovieList from '../components/EditMovieList';


const EditMovieListContainer = (props) => {
  if (props.shown) {
    return <EditMovieList
      title={props.title}
      description={props.movieList.description}
      selectedColor={props.movieList.colors}
      currentList={props.currentList}

      editListTitle={props.editListTitle}
      onHomeOverviewClick={props.onHomeOverviewClick}
      onSaveEditListClick={props.onSaveEditListClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'edit',
    currentList: state.app.currentList,
    movieList: state.lists[state.app.currentList],
    title: state.app.newMovieListTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    editListTitle: (value) => dispatch(EditListTitle(value)),
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    onSaveEditListClick: (list) => dispatch(SaveEditList(list)),
  }
}

const ConnectedEditMovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovieListContainer)

export default ConnectedEditMovieListContainer
