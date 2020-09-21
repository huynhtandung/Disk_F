import { fork, take, call, put } from "redux-saga/effects";
import * as listConstants from "./../constants/index";
import {
  actionGetListSuccess,
  actionGetListFail,
  actionAddListSuccess,
  actionAddListFail,
} from "../actions/index";
import { apiGetList, apiAddList } from "../apis/index";

function* rootSaga() {
  yield fork(watchGetList);
  yield fork(watchAddList);
}

function* watchGetList() {
  while (true) {
    yield take(listConstants.GET_LIST);
    try {
      const res = yield call(apiGetList);
      const { status, data } = res;
      if (status === 200) {
        yield put(actionGetListSuccess(data));
      }
    } catch (err) {
      yield put(actionGetListFail(err.message));
    }
  }
}

function* watchAddList() {
  while (true) {
    const action = yield take(listConstants.ADD_LIST);
    const { params } = action.payload;
    try {
      const res = yield call(apiAddList, params);
      const { status, data } = res;
      if (status === 201) {
        yield put(actionAddListSuccess(data));
      }
    } catch (err) {
      console.log(err);
      yield put(actionAddListFail(err.message));
    }
  }
}

export default rootSaga;
