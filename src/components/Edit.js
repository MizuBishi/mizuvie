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

const Edit = (props) => (
  <div>
    <AppBarHeader
      barHeader={`Edit ${props.title}`}
      onHomeOverviewClick={props.onHomeOverviewClick}
      showBack={true}
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
            value={props.description}
            onChange={e => props.editListDescription(e.target.value)}
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
          label='Delete'
          primary={true}
          style={styles.button}
          onClick={() => props.onDeleteListClick(props.currentList)}
          />
        <RaisedButton
          label='Cancel'
          primary={true}
          style={styles.button}
          onClick={() => props.onCancelEditListClick()}
          />
        <RaisedButton
          onClick={() => props.onSaveEditListClick(props.currentList)}
          label='Save'
          primary={true}
          style={styles.button}/>
      </div>
    </div>
  </div>
);

export default Edit;
