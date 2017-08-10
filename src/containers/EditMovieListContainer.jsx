import React from 'react';
import { connect } from 'react-redux';

import { EditListTitle, EditListDescription, HomeOverview,
  SaveEditList, CancelEditList, DeleteList } from '../actions/app'
  import EditMovieList from '../components/EditMovieList';


  const EditMovieListContainer = (props) => {
    if (props.shown) {
      return <EditMovieList
        title={props.title}
        description={props.movieList.description}
        selectedColor={props.movieList.colors}
        currentList={props.currentList}

        editListTitle={props.editListTitle}
        editListDescription={props.editListDescription}
        onHomeOverviewClick={props.onHomeOverviewClick}
        onSaveEditListClick={props.onSaveEditListClick}
        onCancelEditListClick={props.onCancelEditListClick}
        onDeleteListClick={props.onDeleteListClick}
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
      title: state.app.newListTitle
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onHomeOverviewClick: () => dispatch(HomeOverview()),
      editListTitle: (value) => dispatch(EditListTitle(value)),
      editListDescription: (value) => dispatch(EditListDescription(value)),
      onSaveEditListClick: (list) => dispatch(SaveEditList(list)),
      onCancelEditListClick: () => dispatch(CancelEditList()),
      onDeleteListClick: (list) => dispatch(DeleteList(list)),
    }
  }

  const ConnectedEditMovieListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditMovieListContainer)

  export default ConnectedEditMovieListContainer
