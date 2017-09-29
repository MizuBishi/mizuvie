import { SHOW_LIST } from '../actions/app'

export const INITIAL_STATE={
  app: {
    // can be overview or list or new or edit
    page: 'list',
    currentList: 'b',

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

    console.log('action', action);
    return {
      ...state,
      app: {
        ...state.app,
        page: 'list',
        currentList: action.list
      }
    };
  }

  return state;
}

export default reducer;
