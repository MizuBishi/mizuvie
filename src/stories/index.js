import React, { Component } from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';
import App from '../App';

import CardExampleExpandable from './Card';
import MovieList from './MovieList';
import NewList from './NewList';
import EditList from './EditList';
import ListGridMovies from './GridList';
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
.add('New List', () => (
  <NewList
    hintTitle="Title"
    hintDescription="Description"
    buttonSave="Save"
    buttonCancel="Cancel"
    buttonCancel="Cancel"
    />
))
.add('Edit List', () => (
  <EditList
    hintTitle="Title"
    hintDescription="Description"
    buttonSave="Save"
    buttonCancel="Cancel"
    buttonDelete="Delete"
    />
))
.add('MovieList', () => (
  <MovieList
    title={MOVIE_LIST.title}
    description={MOVIE_LIST.description}
    movies={MOVIE_LIST.movies}
    />
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
    items={
      [
        {color: "#E91E63", label: "Pink"},
        {color: "#673AB7", label: "Deep Purple"},
        {color: "#00BCD4", label: "Cyan"},
        {color: "#3F51B5", label: "Indigo"},
        {color: "#8BC34A", label: "Light Green"},
        {color: "#FFC107", label: "Amber"},
      ]
    }
    />
))
.add('New Movie in List', () => (
  <NewMovieInList
    hintText="Name of new Movie"
    buttonSave="save"
    buttonCancel="Cancel"
    />
));

storiesOf('App', module)
.addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="muiContainer">
      {story()}
    </div>
  </MuiThemeProvider>
))
.add('Grid List', () => (
  <ListGridMovies
    title1 = "movie1"
    author1 = "author1"
    />
));

storiesOf('App', module)
.add('default view', () => (
  <App />
));

storiesOf('Card', module)
.addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="muiContainer">
      {story()}
    </div>
  </MuiThemeProvider>
))
.add('to Storybook', () => (
  <div className="row">
    <div className="col-xs-4">
      <CardExampleExpandable
        title="Without Avatar"
        subtitle="geile wurst"
        />
    </div>
  </div>
));
