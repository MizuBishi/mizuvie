import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import '../index.css';
import App from '../App';

import CardExampleExpandable from './Card';
import ListMovies from './List';
import MovieForm from './Form';
import ListGridMovies from './GridList';
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
.add('Form new Movie', () => (
  <MovieForm
    hintTitle="Title"
    hintDescription="Description"
    buttonSave="Save"
    buttonCancel="Cancel"
    />
))
.add('List', () => (
  <ListMovies
    movie1 = "movie1"
    movie2 = "movie2"
    movie3 = "movie3"
    movie4 = "movie4"
    movie5 = "movie5"
    />
));

storiesOf('App', module)
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

storiesOf('Welcome', module)
.add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')}/>
));

storiesOf('Button', module)
.add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
))
.add('with some emoji', () => (
  <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
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
