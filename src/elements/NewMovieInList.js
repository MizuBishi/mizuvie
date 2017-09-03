import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

const NewMovieInList = (props) => (
  <div className="container">
    <TextField
      hintText='Movie Title'
      value={props.newMovieName}
      onChange={e => props.setNewMovieName(e.target.value)}
      />
    <div className="row">
      <RaisedButton
        label='Save'
        primary={true}
        style={style}
        />
      <RaisedButton
        label='Cancel'
        primary={true}
        style={style}
        onClick={() => props.onCancelNewMovieClick()}
        />
    </div>
  </div>
);

export default NewMovieInList;
