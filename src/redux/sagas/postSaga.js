import { call, takeEvery, put } from "redux-saga/effects";
// import Axios from "axios";
import { userAction } from "../action/userAction";
import userAPI from '../../apis/user'
import { ahihi } from "../slices/userSlice";

export function* fetchDataSaga() {
  try {
    console.log('call');
    let result = yield call(() => userAPI.getMe());
    console.log(result)
    // yield put(fetchData(result.data));
    yield put(ahihi(result));

  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export  function* postSaga() {
  yield takeEvery(userAction.FETCH_DATA_SAGA, fetchDataSaga);

}
