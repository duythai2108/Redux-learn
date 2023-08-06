import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetNews from "./handlers";

// watcher saga after dispatch
export default function* newSaga() {
  yield takeLatest(getNews.type, handleGetNews);
}
