import React from "react";
import {
  BrowserRouter,
  HashRouter,
  StaticRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import NumberBaseball from "./components/NumberBaseball";
import MineSearch from "./components/MineSearch";
import HooksTictactoe from "./components/HooksTictactoe";
import HooksResponseCheck from "./components/HooksResponseCheck";
import ClassLotto from "./components/ClassLotto";
import GameMatcher from "./GameMatcher";

// const Game = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Link to="/NumberBaseball">NumberBaseball</Link>
//         &nbsp;
//         <Link to="/MineSearch">MineSearch</Link>
//         &nbsp;
//         <Link to="/HooksTictactoe">HooksTictactoe</Link>
//         &nbsp;
//         <Link to="/HooksResponseCheck">HooksResponseCheck</Link>
//         &nbsp;
//         <Link to="/ClassLotto">ClassLotto</Link>
//         &nbsp;
//         <Link to="/game/index">Game Matcher</Link>
//       </div>
//       <div>
//         <Route path="/NumberBaseball" component={NumberBaseball} />
//         <Route path="/MineSearch" component={MineSearch} />
//         <Route path="/HooksTictactoe" component={HooksTictactoe} />
//         <Route path="/HooksResponseCheck" component={HooksResponseCheck} />
//         <Route path="/ClassLotto" component={ClassLotto} />
//       </div>
//     </BrowserRouter>
//   );
// };

const Game = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/game/NumberBaseball?query=10&hello=jingyu&bye=react">
            NumberBaseball
          </Link>
          &nbsp;
          <Link to="/game/MineSearch">MineSearch</Link>
          &nbsp;
          <Link to="/game/HooksTictactoe">HooksTictactoe</Link>
          &nbsp;
        </div>
        <Link to="/game/HooksResponseCheck">HooksResponseCheck</Link>
        &nbsp;
        <Link to="/game/ClassLotto">ClassLotto</Link>
        &nbsp;
        <Link to="/game/index">Game Matcher</Link>
      </div>
      <Switch>
        <Route path="/game/:name" component={GameMatcher} />
        <Route path="/game/NumberBaseball" component={GameMatcher} />
        <Route path="/game/NumberBaseball" component={GameMatcher} />
        <Route path="/game/NumberBaseball" component={GameMatcher} />
      </Switch>
      <Switch>
        <Route exact path="/" component={GameMatcher} />
        <Route path="/game/:name" component={GameMatcher} />
      </Switch>
    </BrowserRouter>
  );
};

export default Game;
