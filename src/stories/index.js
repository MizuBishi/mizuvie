import React, { Component } from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';
import App from '../App';

import OverviewList from './OverviewList';
import MovieList from './MovieList';
import NewMovieList from './NewMovieList';
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

const OVERVIEW_LIST = {
  lists: {
    l1: {
      title: "Dokus",
      description: "7/10",
      colors: "#E91E63",
    },
    l2: {
      title: "TV Series",
      description: "0/3",
      colors: "#E91E63",
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
.add('New Movie List', () => (
  <NewMovieList
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
.add('Overview List', () => (
  <div className="row">
    <div className="col-xs-4">
      <OverviewList
        title={OVERVIEW_LIST.title}
        description={OVERVIEW_LIST.description}
        colors={OVERVIEW_LIST.colors}
        lists={OVERVIEW_LIST.lists}
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
    title={OVERVIEW_LIST.title}
    subtitle={OVERVIEW_LIST.subtitle}
    lists={OVERVIEW_LIST.lists}
    />
));

storiesOf('App', module)
.add('default view', () => (
  <App />
));
