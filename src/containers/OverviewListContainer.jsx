import React from 'react';
import OverviewGridList from '../stories/GridList';
import { connect } from 'react-redux';

const OverviewListContainer = (props) => {
  if (props.shown) {
    return   <OverviewGridList
      lists={props.lists}
      />
  } else {
    return null;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    shown: state.app.page == 'overview',
    lists: state.lists
  }
}

const mapDispatchToProps = {}

const ConnectedOverviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewListContainer)

export default ConnectedOverviewListContainer
