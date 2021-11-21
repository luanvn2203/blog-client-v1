import { call, takeEvery, put } from "redux-saga/effects";
// import Axios from "axios";
import { userReducer } from "../reducers/userReducer";
import { sagaActions } from "../action/userAction";
import userAPI from '../../apis/user'

export function* fetchPostSaga() {
  try {
    console.log('call');
    let result = yield call(() => userAPI.getMe());
    yield put(userReducer.ahihi(result));

  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* postSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchPostSaga);
}
