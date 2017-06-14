import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const ListMovies = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-8">
        <h3>My Title</h3>
        <List>
          <div style={styles.block}>
            <Checkbox
              style={styles.checkbox}
              />
          </div>
          <ListItem
            primaryText={props.movie1}
            />
          <ListItem
            primaryText={props.movie2}
            />
          <ListItem
            primaryText={props.movie3}
            />
          <ListItem
            primaryText={props.movie4}
            />
          <ListItem
            primaryText={props.movie5}
            />
        </List>
      </div>
    </div>
  </div>
);

export default ListMovies;
