import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Avatar from 'material-ui/Avatar';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const MovieList = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h3>My List</h3>
        <List>
          <ListItem primaryText={props.movie2} leftCheckbox={<Checkbox />} rightIcon={<Delete />}
            />
          <ListItem primaryText={props.movie2} leftCheckbox={<Checkbox />} rightIcon={<Delete />}
            />
          <ListItem primaryText={props.movie3} leftCheckbox={<Checkbox />} rightIcon={<Delete />}
            />
          <ListItem
            primaryText={props.movie4} leftCheckbox={<Checkbox />} rightIcon={<Delete />}
            />
          <ListItem primaryText={props.movie5} leftCheckbox={<Checkbox />} rightIcon={<Delete />}
            />
        </List>
      </div>
      <div className="row">
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  </div>
);

export default MovieList;
