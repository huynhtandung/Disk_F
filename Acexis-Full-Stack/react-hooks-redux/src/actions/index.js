import * as listConstants from "../constants/index";

export const actionGetList = () => {
  return {
    type: listConstants.GET_LIST,
  };
};
export const actionAddList = (data) => {
  return {
    type: listConstants.ADD_LIST,
    payload: {
      data,
    },
  };
};
export const actionRemoveList = (data) => {
  return {
    type: listConstants.REMOVE_LIST,
    payload: {
      data,
    },
  };
};
