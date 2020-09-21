import * as listConstants from "../constants/index";

/*const initialState = JSON.parse(localStorage.getItem("list")) || [];
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case listConstants.GET_LIST: {
      return initialState;
    }
    case listConstants.ADD_LIST: {
      const { data } = action.payload;
      const newState = [...state];
      newState.push(data);
      localStorage.setItem("list", JSON.stringify(newState));
      return newState;
    }
    case listConstants.REMOVE_LIST: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default rootReducers;*/

//for TEST PAGE

const initialState = {
  a: 1,
  b: 2,
};
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case listConstants.GET_LIST: {
      return initialState;
    }
    case listConstants.ADD_LIST: {
      /* const { data } = action.payload;
      const newState = [...state];
      newState.push(data);*/
      const { data } = action.payload;
      const newState = {
        ...state,
        a: data,
      };
      //localStorage.setItem("list", JSON.stringify(newState));
      return newState;
    }
    case listConstants.REMOVE_LIST: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default rootReducers;
