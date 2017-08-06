import { SHOW_LIST } from '../actions/app'
import { NEW_LIST } from '../actions/app'
import { EDIT_LIST } from '../actions/app'
import { NEW_MOVIE } from '../actions/app'


export const INITIAL_STATE={
  app: {
    // can be overview or list or new or edit
    page: 'list',
    currentList: 'b',
    newMovie: false,

    // new movie text field ar shown or not
    // newMovie: true,
    // editMovie: false,

    newMovieTitle: 'New Movie',
    newMovieDescription: 'New Description',
    newMovieColor: '#00BCD4'
  },
  lists: {
    a: {
      title: 'TV Series',
      description: 'My lovely TV Series',
      colors: '#E91E63',
      movies: {
        m1: {
          title: 'Fargo',
          viewed: false
        },
        m2: {
          title: 'Dexter',
          viewed: true
        },
        m3: {
          title: 'The Knick',
          viewed: true
        },
        m4: {
          title: 'GoT',
          viewed: true
        },
        m5: {
          title: 'Penny Dreadful',
          viewed: true
        }
      }
    },
    b: {
      title: 'Documentaries',
      description: 'Heavy but true',
      colors: '#00BCD4',
      movies: {
        m1: {
          title: 'Fritzl',
          viewed: true
        },
        m2: {
          title: 'Auschwitz',
          viewed: true
        }
      }
    },
    c: {
      title: 'Thrillers',
      description: 'Best Thrillers of the World',
      colors: '#3F51B5',
      movies: {
        m1: {
          title: 'Fritzl',
          viewed: false
        },
        m2: {
          title: 'Auschwitz',
          viewed: true
        }
      }
    },
    d: {
      title: 'Funny',
      description: 'Funny and silly stuff',
      colors: '#FFC107',
      movies: {
        m1: {
          title: 'Fritzl',
          viewed: false
        },
        m2: {
          title: 'Auschwitz',
          viewed: true
        }
      }
    }
  }
}


const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === SHOW_LIST) {

    // state.app.page = 'list';
    // state.app.currentList = action.list;
    // return state;

    // above code does NOT work.
    // below code is equivalent.

    return {
      ...state,
      app: {
        ...state.app,
        page: 'list',
        currentList: action.list
      }
    };
  }
  if (action.type === NEW_LIST) {
    return {
      ...state,
      app: {
        ...state.app,
        page: 'new',
      }
    };
  }
  if (action.type === EDIT_LIST) {
    return {
      ...state,
      app: {
        ...state.app,
        page: 'edit',
        currentList: action.list
      }
    };
  }
  if (action.type === NEW_MOVIE) {
    return {
      ...state,
      app: {
        ...state.app,
        newMovie: true,
      }
    };
  }
  return state;
}

export default reducer;
