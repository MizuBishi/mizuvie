import React from 'react';
import { connect } from 'react-redux';

import New from '../components/New';

import { CancelNewList, SetNewListTitle, SetNewListDescription } from '../actions/new'
import { HomeOverview } from '../actions/app'


const NewContainer = (props) => {
  if (props.shown) {
    return <New
      title={props.newMovieTitle}
      description={props.newMovieDescription}
      selectedColor={props.newMovieColor}

      onHomeOverviewClick={props.onHomeOverviewClick}
      onCancelNewListClick={props.onCancelNewListClick}
      setNewListTitle={props.setNewListTitle}
      setNewListDescription={props.setNewListDescription}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'new',
    newMovie: state.app.newMovie,
    newMovieTitle: state.app.newListTitle,
    newMovieDescription: state.app.newListDescription,
    newMovieColor: state.app.newListColor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHomeOverviewClick: () => dispatch(HomeOverview()),
    onCancelNewListClick: () => dispatch(CancelNewList()),
    setNewListTitle: (value) => dispatch(SetNewListTitle(value)),
    setNewListDescription: (value) => dispatch(SetNewListDescription(value))
  }
}
const ConnectedNewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContainer)

export default ConnectedNewContainer
