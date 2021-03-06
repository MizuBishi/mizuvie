import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

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

const ListOfMovies = (props) => (
  <div>
    <AppBarHeader
      barHeader={props.title}
      showBack={true}
      onHomeOverviewClick={props.onHomeOverviewClick}
      />
    <div className="container">
      <div className="row">
        <Subheader>{props.description}</Subheader>
        <List>
          {
            Object.keys(props.movies).map(key => (
              <ListItem
                primaryText={props.movies[key].title}
                key={key}
                leftCheckbox={
                  <Checkbox checked={props.movies[key].viewed}
                    onCheck={e => props.onCheckViewedMovie(e.target.checked, props.currentList, key)}
                    />}
                    rightIcon={
                      <IconButton>
                        <Delete
                          onClick={() => props.onDeleteMovieClick(props.currentList, key)}
                          />
                      </IconButton>}
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

        export default ListOfMovies;
