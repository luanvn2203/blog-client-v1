import { call, takeEvery, put } from "redux-saga/effects";
// import Axios from "axios";
import { userAction } from "../action/userAction";
import userAPI from "../../apis/user";
import { ahihi } from "../slices/userSlice";

export function* fetchDataSaga() {
  try {
    console.log("call");
    let result = yield call(() =>
      userAPI.register({
        email: "dangquocthai07061998dsss@gmail.com",
        password: "123456",
      })
    );
    console.log(result);
  } catch (e) {
    console.log(e);
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* userSaga() {
  yield takeEvery(userAction.FETCH_DATA_SAGA, fetchDataSaga);
}
