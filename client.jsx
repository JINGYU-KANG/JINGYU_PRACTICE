import React from "react";
import ReactDOM from "react-dom";
import Multiplication from "./components/HooksMultiplication";
import WordRelay from "./components/HooksWordRelay";
import NumberBaseball from "./components/NumberBaseball";
import ClassResponseCheck from "./components/ClassResponseCheck";
import HooksResponseCheck from "./components/HooksResponseCheck";
import ClassLotto from "./components/ClassLotto";
import HooksLotto from "./components/HooksLotto";
// import ClassRPS from "./components/ClassRPS";
// import HooksRPS from "./components/HooksRPS";
import HooksTictactoe from "./components/HooksTictactoe";
import MineSearch from "./components/MineSearch";
import Games from ".";
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
    <HooksLotto />
    <HooksTictactoe />
    <MineSearch /> */}
    <Games />
  </React.StrictMode>,
  document.querySelector("#root")
);
