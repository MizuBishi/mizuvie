import React from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import ColorIcon from 'material-ui/svg-icons/editor/format-color-fill';


const COLORS = [
  {color: "#E91E63", label: "Pink"},
  {color: "#673AB7", label: "Deep Purple"},
  {color: "#00BCD4", label: "Cyan"},
  {color: "#3F51B5", label: "Indigo"},
  {color: "#8BC34A", label: "Light Green"},
  {color: "#FFC107", label: "Amber"},
];

const ColorPicker = (props) => (
  <DropDownMenu
    iconButton={<ColorIcon />}
    value={props.selectedColor}>
    {(() => (COLORS.map((item, i) => (
      <MenuItem
        key={i}
        value={item.color}
        primaryText={item.label}
        />)
      )))()}
    </DropDownMenu>
  );

  export default ColorPicker;
