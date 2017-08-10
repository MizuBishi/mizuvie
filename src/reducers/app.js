import { SHOW_LIST, NEW_LIST, EDIT_LIST, NEW_MOVIE, HOME_OVERVIEW,
  SET_NEW_MOVIE_NAME, CANCEL_NEW_MOVIE, CANCEL_NEW_LIST, EDIT_LIST_TITLE,
  SET_NEW_LIST_TITLE, SET_NEW_LIST_DESCRIPTION, DELETE_MOVIE,
  SAVE_EDIT_LIST, EDIT_LIST_DESCRIPTION, CANCEL_EDIT_LIST , DELETE_LIST,
  CHECK_VIEWED_MOVIE} from '../actions/app'

  export const INITIAL_STATE={
    app: {
      // can be overview, list, new or edit
      page: 'list',
      currentList: 'b',
      newMovie: false,

      // new movie text field ar shown or not
      // newMovie: true,
      // editMovie: false,

      // Name of new movie in NewMovieInList.
      newMovieTitle: '',

      // Name/description/color of new movie list in NewMovieList
      newListTitle: 'New Title',
      newListDescription: 'New Description',
      newListColor: '#00BCD4'
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

    // OVERVIEW
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
          currentList: action.list,
          newListTitle: state.lists[action.list].title,
          newListDescription: state.lists[action.list].description,
          newListColor: state.lists[action.list].colors,
        }
      };
    }

    // LIST
    if (action.type === NEW_MOVIE) {
      return {
        ...state,
        app: {
          ...state.app,
          newMovie: true,
        }
      };
    }
    if (action.type === SET_NEW_MOVIE_NAME) {
      return {
        ...state,
        app: {
          ...state.app,
          newMovieTitle: action.movie
        }
      };
    }
    if (action.type === CANCEL_NEW_MOVIE) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'list',
          newMovie: false,
        }
      };
    }
    if (action.type === DELETE_MOVIE) {
      let movies = {...state.lists[action.list].movies};
      delete movies[action.movie];
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.list]: {
            ...state.lists[action.list],
            movies: movies
          }
        }
      };
    }
    if (action.type === CHECK_VIEWED_MOVIE) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'list',
          viewed: true,
        }
      };
    }

    // EDIT
    if (action.type === EDIT_LIST_TITLE) {
      return {
        ...state,
        app: {
          ...state.app,
          newListTitle: action.list
        }
      };
    }
    if (action.type === EDIT_LIST_DESCRIPTION) {
      return {
        ...state,
        app: {
          ...state.app,
          newListDescription: action.list
        }
      };
    }
    if (action.type === SAVE_EDIT_LIST) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'overview'
        },
        lists: {
          ...state.lists,
          [action.list]: {
            ...state.lists[action.list],
            title: state.app.newListTitle,
            description: state.app.newListDescription,
            colors: state.app.newListColor,
          }
        }
      };
    }
    if (action.type === CANCEL_EDIT_LIST) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'overview',
        }
      };
    }

    //NEW
    if (action.type === SET_NEW_LIST_TITLE) {
      return {
        ...state,
        app: {
          ...state.app,
          newListTitle: action.list
        }
      };
    }
    if (action.type === SET_NEW_LIST_DESCRIPTION) {
      return {
        ...state,
        app: {
          ...state.app,
          newListDescription: action.list
        }
      };
    }
    if (action.type === CANCEL_NEW_LIST) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'overview',
        }
      };
    }
    if (action.type === DELETE_LIST) {
      let lists = {...state.lists};
      delete lists[action.currentList];
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.list]: {
            ...state.lists[action.list],
            lists: lists
          }
        }
      };
    }

    // GENERAL
    if (action.type === HOME_OVERVIEW) {
      return {
        ...state,
        app: {
          ...state.app,
          page: 'overview',
        }
      };
    }
    return state;
  }

  export default reducer;
