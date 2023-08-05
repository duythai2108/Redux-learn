import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const globalOptions = useSelector((state) => state.global);
  // console.log("🚀 ~ App ~ globalOptions:", globalOptions);
  // const dispatch = useDispatch();
  // const handleToggleDarkMode = () => {
  //   dispatch(toggleDarkMode(true));
  // };
  return (
    <div>
      <Card></Card>
      {/* <button onClick={handleToggleDarkMode}>Toggle dark mode</button> */}
    </div>
  );
}

//CounterGrandpa -> CounterPArent -> Counter
export default App;
