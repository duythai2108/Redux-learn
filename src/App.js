import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

//CounterGrandpa -> CounterPArent -> Counter
export default App;
