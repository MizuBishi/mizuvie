import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import ColorPicker from '../elements/ColorPicker';
import AppBarHeader from '../elements/AppBarHeader';


const styles = {
  text: {
    fontWeight: '100',
  },
  button: {
    marginRight: 20,
    float: 'right',
  },
};

const NewList = (props) => (
  <div>
    <AppBarHeader
      barHeader='New List'
      onHomeOverviewClick={props.onHomeOverviewClick}
      showBack={true}
      />
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <TextField
            hintText='Title'
            value={props.newListTitle}
            onChange={e => props.setNewListTitle(e.target.value)}
            />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <TextField
            hintText='Description'
            value={props.newListDescription}
            onChange={e => props.setNewListDescription(e.target.value)}
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
          label="Cancel"
          primary={true}
          style={styles.button}
          onClick={() => props.onCancelNewListClick()}
          />
        <RaisedButton
          onClick={() => props.onSaveNewListClick(props.currentList)}
          label="Save"
          primary={true}
          style={styles.button}
          />
      </div>
    </div>
  </div>
);

export default NewList;
