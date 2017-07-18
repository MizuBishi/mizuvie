import React from 'react';
import OverviewList from '../stories/OverviewList';
import { connect } from 'react-redux';

const OverviewListContainer = (props) => (
  props.hidden ?
    null
  :
    <OverviewList
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
