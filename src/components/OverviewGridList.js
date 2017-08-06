import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Done from 'material-ui/svg-icons/action/done';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
    margin: '5px'
  },
  text: {
    fontWeight: '100',
  },
  button: {
    marginRight: 20,
    float: 'right',
  },
};

const numberOfMovies = (allList) => {
  return Object.keys(allList.movies).length;
}

const numberOfViewedMovies = (allList) => {
  return Object.values(allList.movies).reduce((acc, movie) => acc + movie.viewed, 0);
}

const OverviewGridList = (props) => (
  <div>
    <div className="row">
      <AppBar titleStyle={styles.text}
        title="Mizuvie Movie's"
        />
    </div>
    <div className="row">
      <div className="col-xs-12" style={styles.root}>
        <GridList style={styles.gridList} cellHeight={180}>
          {
            Object.keys(props.lists).map((key, index) => (
              <GridTile style={{background:props.lists[key].colors}}
                title={props.lists[key].title}
                key={key}
                subtitle={<span>Viewed: <b>{numberOfViewedMovies(props.lists[key])}</b>/{numberOfMovies(props.lists[key])}</span>}
                onClick={() => props.onTileClick(key)}
                >
                <div>
                  {numberOfMovies(props.lists[key]) === numberOfViewedMovies(props.lists[key]) ? <Done style={{color: 'white', margin: '5px'}}/> : null}
                  <IconButton>
                    <Edit
                      style={{color: 'white', margin: '5px'}}
                      onClick={e => {
                        props.onEditListClick(key);
                        e.stopPropagation();
                      }}
                      />
                  </IconButton>
                </div>
              </GridTile>
            ))
          }
        </GridList>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <FloatingActionButton
          style={styles.button}
          onClick={() => props.onListClick()}>
          <ContentAdd
            />
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
