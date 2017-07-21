const INITIAL_STATE={
  app: {
    page: "overview",
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
        },
        m4: {
          title: "GoT",
          viewed: true
        },
        m5: {
          title: "Penny Dreadful",
          viewed: true
        }
      }
    },
    b: {
      title: "Documentaries",
      description: "Heavy but true",
      colors: "#00BCD4",
      movies: {
        m1: {
          title: "Fritzl",
          viewed: true
        },
        m2: {
          title: "Auschwitz",
          viewed: true
        }
      }
    },
    c: {
      title: "Thrillers",
      description: "Best Thrillers of the World",
      colors: "#3F51B5",
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
    },
    d: {
      title: "Funny",
      description: "Funny and silly stuff",
      colors: "#FFC107",
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
