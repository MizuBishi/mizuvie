import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
    margin: '10px'
  },
};

const OverviewGridList = (props) => (
  <div className="container">
    <div className="row">
      <h2 style={{marginLeft: '20px'}}>Mizuvie Movies</h2>
    </div>
    <div className="row">
      <div className="col-xs-12" style={styles.root}>
        <GridList style={styles.gridList} cellHeight={180}>
          {
            Object.values(props.lists).map((allList, index) => (
              <GridTile style={{background:allList.colors}}
                title={allList.title}
                key={index}
                subtitle={<span>Viewed: <b>{Object.values(allList.movies)
                  .reduce((acc, movie) => acc + movie.viewed, 0)}</b>/
                  {Object.keys(allList.movies).length}</span>}
                  >
                  <div>
                  </div>
                </GridTile>
              ))
            }
          </GridList>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <FloatingActionButton style={{float: 'right', margin: '10px'}}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    </div>
  );

  export default OverviewGridList;
