import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

const NewList = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-6">
        <h3>New List</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <TextField
          hintText={props.hintTitle}/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <TextField
          hintText={props.hintDescription}/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <RaisedButton
          label={props.buttonSave} primary={true} style={style}/>
        <RaisedButton
          label={props.buttonCancel} primary={true} style={style}/>
      </div>
    </div>
  </div>
);
export default NewList;
