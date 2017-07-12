import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import '../index.css';
import App from '../App';

import CardExampleExpandable from './Card';
import MovieList from './MovieList';
import NewList from './NewList';
import EditList from './EditList';
import ListGridMovies from './GridList';
import ColorPicker from '../elements/ColorPicker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    movie1 = "movie1"
    movie2 = "movie2"
    movie3 = "movie3"
    movie4 = "movie4"
    movie5 = "movie5"
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
    value1="Pink #E91E63"
    value2="Deep Purple #673AB7"
    value3="Cyan #00BCD4"
    value4="Indigo #3F51B5"
    value5="Light Green #8BC34A"
    value6="Amber #FFC107"
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
