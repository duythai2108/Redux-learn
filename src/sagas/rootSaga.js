import { all, fork } from "redux-saga/effects";
import newSaga from "./news/saga";

export default function* rootSaga() {
  yield all([fork(newSaga)]);
}
// blocking vs non-blocking function
// blocking: call,put
// non-blocking:fork
// all,fork