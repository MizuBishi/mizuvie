import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ColorPicker from '../elements/ColorPicker';
import AppBar from 'material-ui/AppBar';


const styles = {
  text: {
    fontWeight: '100',
  },
  button: {
    marginRight: 20,
    float: 'right',
  },
};

const NewMovieList = (props) => (
  <div className="container">
    <div className="row">
        <AppBar
          title='New List' titleStyle={styles.text}
          />
      </div>
    <div className="row">
      <div className="col-xs-12">
        <TextField
          hintText="Title"
          value={props.title}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <TextField
          hintText="Description"
          value={props.description}
          />
      </div>
    </div>
    <div className="row" style={{marginLeft: '-20px'}}>
      <ColorPicker
        selectedColor={props.selectedColor}
        />
    </div>
    <div className="row">
      <RaisedButton
        label="Save" primary={true} style={styles.button}/>
      <RaisedButton
        label="Cancel" primary={true} style={styles.button}/>
    </div>
  </div>
);

NewMovieList.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  selectedColor: React.PropTypes.string,
};

export default NewMovieList;
