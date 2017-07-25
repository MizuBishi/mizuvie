import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from '../elements/ColorPicker';


const style = {
  margin: 12,
};

const EditMovieList = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-6">
        <h3>{props.title}</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <TextField
          value={props.title}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-6">
        <TextField
          value={props.description}/>
      </div>
    </div>
    <div className="row" style={{marginLeft: '-20px'}}>
      <ColorPicker
        selectedColor={props.selectedColor}
        />
    </div>
    <div className="row">
      <RaisedButton
        label='Save' primary={true} style={style}/>
      <RaisedButton
        label='Cancel' primary={true} style={style}/>
      <RaisedButton
        label='Delete' primary={true} style={style}/>
    </div>
  </div>
);

export default EditMovieList;
