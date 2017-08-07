import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import ColorPicker from '../elements/ColorPicker';
import AppBarHeader from '../elements/AppBarHeader';

//how to concenate strings? e.g. barHeader='Edit ' + {props.title}

const style = {
  margin: 12,
};

const EditMovieList = (props) => (
  <div>
    <AppBarHeader
      barHeader='Edit List'
      />
    <div className="container">
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
  </div>
);

EditMovieList.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  selectedColor: React.PropTypes.string,
};

export default EditMovieList;
