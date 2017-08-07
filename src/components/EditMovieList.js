import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import ColorPicker from '../elements/ColorPicker';
import AppBarHeader from '../elements/AppBarHeader';


const styles = {
  text: {
    margin: 12,
  },
  button: {
    marginRight: 20,
    float: 'right',
  },
};
const EditMovieList = (props) => (
  <div>
    <AppBarHeader
      barHeader={`Edit ${props.title}`}
      />
    <div className="container">
      <div className="row">
        <div className="col-xs-6">
          <TextField
            value={props.title}
            onChange={e => props.editListTitle(e.target.value)}
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
          label='Delete' primary={true} style={styles.button}/>
        <RaisedButton
          label='Cancel' primary={true} style={styles.button}/>
        <RaisedButton
          label='Save' primary={true} style={styles.button}/>
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
