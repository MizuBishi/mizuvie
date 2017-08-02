import React from 'react';
import { connect } from 'react-redux';

import { ShowList } from '../actions/app'
import OverviewGridList from '../components/OverviewGridList';


const OverviewListContainer = (props) => {
  if (props.shown) {
    return   <OverviewGridList
      lists={props.lists}
      onTileClick={props.onTileClick}
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
    onTileClick: list => dispatch(ShowList(list))
  }
}

const ConnectedOverviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewListContainer)

export default ConnectedOverviewListContainer
