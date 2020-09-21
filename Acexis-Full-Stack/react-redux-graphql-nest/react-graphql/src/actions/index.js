import * as textConst from "../constants/index";

export const actionGetTextSuccess = (data) => {
  return {
    type: textConst.GET_TEXT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const actionAddTextSuccess = (data) => {
  return {
    type: textConst.ADD_TEXT_SUCCESS,
    payload: {
      data,
    },
  };
};

/*export const actionRemoveList = (data) => {
  return {
    type: textConst.REMOVE_LIST,
    payload: {
      data,
    },
  };
};*/
