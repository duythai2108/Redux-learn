import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDarkMode from "../hooks/useDarkMode";
import {
  decrement,
  increment,
  incrementbyvalue,
} from "../redux-toolkit/counterSlice";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";
import Card from "./Card";
// import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  // // Write new function name handleDecrement
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // // handleIncrementByValue
  const handleIncrementByValue = () => {
    dispatch(incrementbyvalue({ value: 10 }));
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
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
        {/*
         */}
      </div>
      <div className="mt-10">
        <SwitchDarkMode></SwitchDarkMode>
      </div>
      <div className="mt-5">
        <Card></Card>
      </div>
    </div>
  );
};
function SwitchDarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };
  return (
    <button
      className="p-5 border border-gray-300 bg-green-400 text-white text-sm rounded-lg"
      onClick={handleToggleDarkMode}
    >
      Toggle dark mode
    </button>
  );
}
export default Counter;
