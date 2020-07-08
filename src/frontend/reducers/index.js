/* eslint-disable prefer-const */
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //traer el estado
        myList: [...state.myList, action.payload], //elemento que se actualiza o cambia en el estado

      };

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
      
    case 'GET_VIDEO_SOURCE':
      return {
        ...state, //primero se concatenan los dos arreglos y se usa el find para filtar
        playing: state.trends.concat(state.originals).find((item) => item.id === Number(action.payload)) || [],
      };

    case 'FILTER_VIDEO': {
      //Valor que viene del input
      const inpuValue = action.payload;
      //La lista de los dos array concatenados 
      const list = state.trends.concat(state.originals);
      let movieListByName ;

      console.log('Este es el input value en el deduccer', inpuValue);
      if (inpuValue === '') {
        console.log('ahorita esta vacio deberia traer nada'); 
        movieListByName = [];
      } else {
        movieListByName = list.filter((movie) => movie.title.toLowerCase().includes(inpuValue.toLowerCase()));
      }

      return { ...state, movieListByName };   
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;

  }
};
export default reducer;
