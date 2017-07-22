import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from '../elements/ColorPicker';


const style = {
  margin: 12,
};

const NewMovieList = (props) => (
  <div className="container">
    <div className="row">
      <h3>New List</h3>
    </div>
    <div className="row">
      <TextField
        hintText="Title"
        value={props.title}
        />
    </div>
    <div className="row">
      <TextField
        hintText="Description"
        value={props.description}
        />
    </div>
    <div className="row">
      <ColorPicker
        selectedColor={props.selectedColor}
        />
    </div>
    <div className="row">
      <RaisedButton
        label="Save" primary={true} style={style}/>
      <RaisedButton
        label="Cancel" primary={true} style={style}/>
    </div>
  </div>
);
export default NewMovieList;
