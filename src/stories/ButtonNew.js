import React from 'react';
import { Button } from 'react-bootstrap';


const ButtonNEW = ({ children, onClick }) => (
  <Button bsStyle="success"
    onClick={onClick}
  >
    {children}
  </Button>
);

ButtonNEW.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default ButtonNEW;
