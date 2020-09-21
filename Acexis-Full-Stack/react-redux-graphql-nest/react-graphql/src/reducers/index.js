import * as textConst from "../constants/index";

const initialState = [];

const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case textConst.GET_TEXT_SUCCESS: {
      const { data } = action.payload;
      console.log("GET: ", data);
      return [...data];
    }
    case textConst.ADD_TEXT_SUCCESS: {
      const { data } = action.payload;
      console.log("Add: ", data);
      state.push(data);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default rootReducers;
