import React, { Component } from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';
import App from '../App';
import {INITIAL_STATE} from '../reducers/app';

import OverviewGridList from '../components/OverviewGridList';
import MovieList from '../components/MovieList';
import NewMovieList from '../components/NewMovieList';
import EditList from '../components/EditList';
import ColorPicker from '../elements/ColorPicker';
import NewMovieInList from '../elements/NewMovieInList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const MOVIE_LIST = {
  title: "TV Series",
  description: "My lovely TV Series",
  colors: "#E91E63",
  movies: {
    m1: {
      title: "Fargo",
      viewed: false
    },
    m2: {
      title: "Dexter",
      viewed: true
    }
  }
};

storiesOf('Pages', module)
.addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="muiContainer">
      {story()}
    </div>
  </MuiThemeProvider>
))
.add('MovieList', () => (
  <MovieList
    title={INITIAL_STATE.lists.a.title}
    description={INITIAL_STATE.lists.a.description}
    movies={INITIAL_STATE.lists.a.movies}
    />
))
.add('NewMovieList', () => (
  <NewMovieList
    hintTitle="Title"
    hintDescription="Description"
    buttonSave="Save"
    buttonCancel="Cancel"
    />
))
.add('EditList', () => (
  <EditList
    hintTitle="Title"
    hintDescription="Description"
    buttonSave="Save"
    buttonCancel="Cancel"
    buttonDelete="Delete"
    />
))
.add('OverviewGridList', () => (
  <div className="row">
    <div className="col-xs-4">
      <OverviewGridList
        lists={INITIAL_STATE.lists}
        />
    </div>
  </div>
));

storiesOf('Elements', module)
.addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="muiContainer">
      {story()}
    </div>
  </MuiThemeProvider>
))
.add('Color Picker', () => (
  <ColorPicker
    selectedColor="#8BC34A"
    />
))
.add('New Movie in List', () => (
  <NewMovieInList
    hintText="Name of new Movie"
    buttonSave="save"
    buttonCancel="Cancel"
    />
));
