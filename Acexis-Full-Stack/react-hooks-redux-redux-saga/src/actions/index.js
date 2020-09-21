import * as listConstants from "../constants/index";

export const actionGetList = () => {
  return {
    type: listConstants.GET_LIST,
  };
};
export const actionGetListSuccess = (data) => {
  return {
    type: listConstants.GET_LIST_SUCCESS,
    payload: {
      data,
    },
  };
};
export const actionGetListFail = (err) => {
  return {
    type: listConstants.GET_LIST_FAIL,
    payload: {
      err,
    },
  };
};
export const actionAddList = (params) => {
  return {
    type: listConstants.ADD_LIST,
    payload: {
      params,
    },
  };
};

export const actionAddListSuccess = (data) => {
  return {
    type: listConstants.ADD_LIST_SUCCESS,
    payload: {
      data,
    },
  };
};
export const actionAddListFail = (data) => {
  return {
    type: listConstants.ADD_LIST_FAIL,
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
