import React from 'react';
import { connect } from 'react-redux';

import OverviewGridList from '../components/OverviewGridList';


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
    shown: state.app.page === 'overview',
    lists: state.lists
  }
}

const mapDispatchToProps = {}

const ConnectedOverviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewListContainer)

export default ConnectedOverviewListContainer
