import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Done from 'material-ui/svg-icons/action/done';


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

const numberOfMovies = (allList) => {
  return Object.keys(allList.movies).length;
}

const numberOfViewedMovies = (allList) => {
  return Object.values(allList.movies).reduce((acc, movie) => acc + movie.viewed, 0);
}

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
                subtitle={<span>Viewed: <b>{numberOfViewedMovies(allList)}</b>/
                {numberOfMovies(allList)}</span>}
                >
                <div>
                  {numberOfMovies(allList) === numberOfViewedMovies(allList) ? <Done style={{color: 'white', margin: '5px'}}/> : null}
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

OverviewGridList.propTypes = {
  lists: React.PropTypes.shape({
    title: React.PropTypes.string,
    subtitle: React.PropTypes.number,
  })
};

export default OverviewGridList;
