const INITIAL_STATE={
  app: {
    page: "list",
    currentList: "a",
    newMovie: false
  },
  lists: {
    a: {
      title: "TV Series",
      description: "My lovely TV Series",
      colors: "#E91E63",
      movies: {
        m1: {
          title: "Fargo",
          viewed: false
        },
        m2: {
          title: "Dexter",
          viewed: true
        },
        m3: {
          title: "The Knick",
          viewed: true
        }
      }
    },
    b: {
      title: "Documentaries",
      description: " ",
      colors: "#00BCD4",
      movies: {
        m1: {
          title: "Fritzl",
          viewed: false
        },
        m2: {
          title: "Auschwitz",
          viewed: true
        }
      }
    }
  }
}


const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default reducer;
