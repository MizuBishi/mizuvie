import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const MovieForm = (props) => (
  <div>
    <TextField
      hintText={props.hintTitle}
    /><br/>
    <br/>
    <TextField
      hintText={props.hintDescription}
    /><br/>
    <RaisedButton label={props.buttonSave} primary={true} style={style}
    />
    <RaisedButton label={props.buttonCancel} primary={true} style={style}
    />
  </div>
);
export default MovieForm;
