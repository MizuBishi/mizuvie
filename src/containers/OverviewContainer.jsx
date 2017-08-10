import React from 'react';
import { connect } from 'react-redux';

import Overview from '../components/Overview';

import { ShowList, NewList, EditList } from '../actions/overview'


const OverviewContainer = (props) => {
  if (props.shown) {
    return   <Overview
      lists={props.lists}
      onTileClick={props.onTileClick}
      onListClick={props.onListClick}
      onEditListClick={props.onEditListClick}
      />
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page === 'overview',
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTileClick: list => dispatch(ShowList(list)),
    onListClick: () => dispatch(NewList()),
    onEditListClick: list => dispatch(EditList(list)),
  }
}

const ConnectedOverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewContainer)

export default ConnectedOverviewContainer
