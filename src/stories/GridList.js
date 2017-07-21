import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
    // margin: '5px'
  },
};

const OverviewGridList = (props) => (
  <div style={styles.root}>
    <div>
      <GridList style={styles.gridList} cellHeight={280}>
        {
          Object.values(props.lists).map((allList, index) => (
            <GridTile style={{background:allList.colors}}
              title={allList.title}
              key={index}
              subtitle={<span>Viewed: <b>{Object.values(allList.movies).reduce
                ((acc, movie) => acc + movie.viewed, 0)}</b>/
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
  );

  export default OverviewGridList;
