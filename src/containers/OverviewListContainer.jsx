import React from 'react';
import OverviewGridList from '../stories/GridList';
import { connect } from 'react-redux';

const OverviewListContainer = (props) => (
  props.hidden ?
    null
  :
    <OverviewGridList
    lists={props.lists}
    />
)

const mapStateToProps = (state, ownProps) => {
  return {
    hidden: state.app.page !== 'overview',
    lists: state.lists
  }
}

const mapDispatchToProps = {}

const ConnectedOverviewListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewListContainer)

export default ConnectedOverviewListContainer
