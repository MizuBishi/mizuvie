import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';

import NewMovieInList from '../elements/NewMovieInList';
import AppBarHeader from '../elements/AppBarHeader';


const styles = {
  text: {
    fontWeight: '100',
  },
  button: {
    marginRight: 20,
    float: 'right',
  },
};

const MovieList = (props) => (
  <div>
    <AppBarHeader
      barHeader={props.title}
      showBack={true}
      />
    <div className="container">
      <div className="row">
        <Subheader>{props.description}</Subheader>
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
        {props.newMovie ? <NewMovieInList
          newMovieName={props.newMovieName}
          setNewMovieName={props.setNewMovieName}
          onCancelNewMovieClick={props.onCancelNewMovieClick}
          /> : null}
          <div className="row">
            <div className="col-xs-12">
              <FloatingActionButton
                style={styles.button}
                onClick={() => props.onNewMovieClick()}>
                <ContentAdd
                  />
              </FloatingActionButton>
            </div>
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
