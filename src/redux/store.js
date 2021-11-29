import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index";
import { modalState } from "./slices/modalState";
import { userSlice } from "./slices/userSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalState.reducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
