import React from 'react';
import {storiesOf} from '@kadira/storybook';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const NewMovieInList = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <TextField
          hintText={props.hintText}
          />
      </div>
      <div className="row">
        <RaisedButton
          label={props.buttonSave} primary={true} style={style}/>
        <RaisedButton
          label={props.buttonCancel} primary={true} style={style}/>
        </div>
      </div>
    </div>
  );

  export default NewMovieInList;
