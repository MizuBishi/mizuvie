import React from 'react';
import {storiesOf} from '@kadira/storybook';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


const ColorPicker = (props) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <DropDownMenu
          value={props.selectedColor}>
          {(() => (props.items ? props.items.map((item, i) =>
            <MenuItem
              key={i}
              value={item.color}
              primaryText={item.label}
              />) : undefined
            ))()}
          </DropDownMenu>
        </div>
      </div>
    </div>
  );

  export default ColorPicker;
