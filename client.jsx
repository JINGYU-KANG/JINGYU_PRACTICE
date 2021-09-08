import React from "react";
import ReactDOM from "react-dom";
import Multiplication from "./components/Multiplication";
import WordRelay from "./components/WordRelay";
import NumberBaseball from "./components/NumberBaseball";
import ClassResponseCheck from "./components/ClassResponseCheck";
import HooksResponseCheck from "./components/HooksResponseCheck";
import ClassLotto from "./components/ClassLotto";
import HooksLotto from "./components/HooksLotto";
// import ClassRPS from "./components/ClassRPS";
// import HooksRPS from "./components/HooksRPS";
import HooksTictactoe from "./components/HooksTictactoe";
// import {hot} from 'react-hot-loader/root'

// const Hot = hot(Multiplication);

ReactDOM.render(
  <React.StrictMode>
    {/* <Hot/> */}
    {/* <Multiplication />
    <WordRelay />
    <NumberBaseball />
    <ClassResponseCheck />
    <HooksResponseCheck />
    <ClassRPS />
    <HooksRPS />
    <ClassLotto />
    <HooksLotto /> */}
    <HooksTictactoe />
  </React.StrictMode>,
  document.querySelector("#root")
);
