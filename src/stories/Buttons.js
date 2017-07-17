import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
};

const Buttons = (props) => (
  <div>
    <RaisedButton
      label={props.buttonSave} primary={true} style={style}/>
  </div>
);
export default Buttons;
