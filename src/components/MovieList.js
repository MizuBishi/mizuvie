import React from 'react';

import {List, ListItem} from 'material-ui/List';
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
        <div className="col-xs-12">
          <FloatingActionButton style={{float: 'right', margin: '10px'}}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    </div>
  </div>
);

MovieList.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  movies: React.PropTypes.shape({
    title: React.PropTypes.string,
    viewed: React.PropTypes.bool,
  })
};

export default MovieList;
