import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementbyvalue } from "../redux/counter";
import {
  increment,
  decrement,
  incrementbyvalue,
} from "../redux-toolkit/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementbyvalue({ value: 10 }));
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[200px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
          Increase by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
