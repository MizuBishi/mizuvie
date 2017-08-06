import React from 'react';
import { connect } from 'react-redux';

import { ShowList } from '../actions/app'
import { NewList } from '../actions/app'
import { EditList } from '../actions/app'
import OverviewGridList from '../components/OverviewGridList';


const OverviewListContainer = (props) => {
  if (props.shown) {
    return   <OverviewGridList
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

const ConnectedOverviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewListContainer)

export default ConnectedOverviewListContainer
