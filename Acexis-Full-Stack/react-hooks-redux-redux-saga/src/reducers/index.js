import * as listConstants from "../constants/index";
const initialState = [];

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case listConstants.GET_LIST: {
      return initialState;
    }
    case listConstants.GET_LIST_SUCCESS: {
      const { data } = action.payload;
      return data;
    }
    case listConstants.GET_LIST_FAIL: {
      return initialState;
    }
    case listConstants.ADD_LIST_SUCCESS: {
      const { data } = action.payload;
      const newList = [...state];
      newList.push(data);
      return newList;
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
