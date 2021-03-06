import React from 'react';

import AppBar from 'material-ui/AppBar';
import Back from 'material-ui/svg-icons/hardware/keyboard-backspace';
import IconButton from 'material-ui/IconButton';


const styles = {
  text: {
    fontWeight: '100',
  },
};

const AppBarHeader = (props) => (
  <AppBar
    title={props.barHeader}
    titleStyle={styles.text}
    iconElementLeft={props.showBack ? <IconButton>
      <Back
        onClick={() => props.onHomeOverviewClick()}
        />
    </IconButton> : null}
    showMenuIconButton={!!props.showBack}
    />
);

export default AppBarHeader;
