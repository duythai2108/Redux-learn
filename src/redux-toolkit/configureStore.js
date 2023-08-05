import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice, { incrementbyvalue } from "./counterSlice";
import globalSlice from "./globalSlice";
import logger from "redux-logger";
const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger store state
const loggerMiddleware = (store) => (next) => (action) => {
  // your code here
  console.log(action);
  action.payload = 10;
  next(action);
};
// redux-logger
// const loggerMiddleware = function(store) {
//   return function(next) {
//     return function(action) {
//       //your code here
//     }
//   }
// }
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
// store.subscribe(() => {
//   console.log(`current state: ${store.getState().counter.count}`);
// });
store.dispatch(incrementbyvalue(1));
store.dispatch(incrementbyvalue(3));
store.dispatch(incrementbyvalue(5));
export default store;
