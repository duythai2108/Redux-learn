import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
import Sidebar from "./components/Sidebar";
import ButtonToggle from "./components/ButtonToggle";
import HackerNews from "./components/HackerNews";
import { getNews } from "./sagas/news/newsSlice";

function App() {
  // generator function

  // useEffect(() => {
  //   function* demoGenerator() {
  //     yield 1;
  //     yield 2;
  //     yield 3;
  //   }
  //   const gen = demoGenerator();
  //   console.log(gen.next());
  // }, []);

  // redux saga architecture

  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

//CounterGrandpa -> CounterPArent -> Counter
export default App;
