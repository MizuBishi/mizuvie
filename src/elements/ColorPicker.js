import React from 'react';
import {storiesOf} from '@kadira/storybook';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

const ColorPicker = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <DropDownMenu>
          <MenuItem value={1} primaryText={props.value1} />
          <MenuItem value={2} primaryText={props.value2} />
          <MenuItem value={3} primaryText={props.value3} />
          <MenuItem value={4} primaryText={props.value4} />
          <MenuItem value={5} primaryText={props.value5} />
          <MenuItem value={6} primaryText={props.value6} />
        </DropDownMenu>
      </div>
    </div>
  </div>
);

export default ColorPicker;
