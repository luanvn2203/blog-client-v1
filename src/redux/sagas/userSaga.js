import { call, takeEvery, put } from "redux-saga/effects";
// import Axios from "axios";
import { userAction } from "../action/userAction";
import userAPI from "../../apis/user";
import { resetFormResgister, saveUserLogin } from "../slices/userSlice";
import userAPIs from "../../apis/userApi";
import { onClickModalOpen } from "../slices/modalState";
import { setLocalStorages, showMessage } from "../../assets/helper";
import { textLocal, TextMessage } from "../../assets/text";

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

export function* postLogin(params) {
  try {
    let result = yield call(() => userAPIs.login(params.payload));
    console.log(result);
    if (result.status === 202) {
      showMessage("error", result.data.error);
    } else {
      yield put(saveUserLogin(result.data));
      showMessage("success", TextMessage.noti.LOGIN_SUCCESS);
      yield put(resetFormResgister(true));
      yield put(onClickModalOpen(false));
      setLocalStorages(textLocal.USER_INFO, result.data);
    }
  } catch (error) {
    console.log(error);
    showMessage("error", TextMessage.noti.ERROR_SEVER);
  }
}

export function* postRegister(params) {
  try {
    let result = yield call(() => userAPIs.register(params.payload));
    console.log(result.data.error);
    if (result.status === 202) {
      showMessage("error", result.data.error);
    } else {
      showMessage("success", TextMessage.noti.REGISTER_SUCCESS);
      yield put(resetFormResgister(true));
      yield put(onClickModalOpen(false));
    }
  } catch (error) {
    console.log(error);
    showMessage("error", TextMessage.noti.ERROR_SEVER);
  }
}

export function* userSaga() {
  yield takeEvery(userAction.FETCH_DATA_SAGA, fetchDataSaga);
  yield takeEvery(userAction.USER_LOGIN, postLogin);
  yield takeEvery(userAction.USER_REGISTER, postRegister);
}
