import React from 'react';
// import {storiesOf} from '@kadira/storybook';
// import Avatar from 'material-ui/Avatar';

import {List, ListItem} from 'material-ui/List';
// import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



const MovieList = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <List>
          {
            Object.values(props.movies).map((movie, index) => (
              <ListItem
                primaryText={movie.title}
                key={index}
                leftCheckbox={<Checkbox checked={movie.viewed} />}
                rightIcon={<Delete />}
                />
            ))
          }
        </List>
      </div>
      <div className="row">
        <FloatingActionButton style={{float: 'right'}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  </div>
);

export default MovieList;
