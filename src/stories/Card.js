import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const CardExampleExpandable = (props) => (
  <Card>
    <CardHeader
      title={props.title}
      subtitle={props.subtitle}
    />
  </Card>
);

export default CardExampleExpandable;
