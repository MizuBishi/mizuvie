import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import '../index.css';
import App from '../App';

import CardExampleExpandable from './Card';
import MovieForm from './Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

storiesOf('Form', module)
.addDecorator(story => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div className="muiContainer">
      {story()}
    </div>
  </MuiThemeProvider>
))
.add('Form new Movie', () => (
  <div className="col-xs-4">
    <div className="row">
      <div className="col-xs-4">
        <h3>New List</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-4">
        <MovieForm
          hintTitle="Title"
          hintDescription="Description"
          buttonSave="Save"
          buttonCancel="Cancel"
          />
      </div>
    </div>
  </div>
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
// .add('Michelle', () => (
//   <ButtonNEW>Hello</ButtonNEW>
// ))
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
