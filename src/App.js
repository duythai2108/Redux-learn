import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
import Sidebar from "./components/Sidebar";
import ButtonToggle from "./components/ButtonToggle";

function App() {
  return <div></div>;
}

//CounterGrandpa -> CounterPArent -> Counter
export default App;
