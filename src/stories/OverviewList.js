import React from 'react';

import {Card, CardHeader} from 'material-ui/Card';


const style = {
  background: 'aqua',
  marginBottom: '1rem',
  paddingRight: 0
};

const noPadding = {
  padding: 0,
};

const OverviewList = (props) => (
  <div className="container">
    <div className="row">
        {
          Object.values(props.lists).map((allList, index) => (
            <div className="col-xs-6"  key={index}>
            <Card style={style}>
              <CardHeader
                textStyle={noPadding}
                title={allList.title}
                subtitle={allList.description}
                colors={allList.colors}
                />
            </Card>
          </div>
          ))
        }
    </div>
  </div>
);

export default OverviewList;
