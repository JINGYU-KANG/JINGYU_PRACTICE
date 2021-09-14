import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import NumberBaseball from "./components/NumberBaseball";
import MineSearch from "./components/MineSearch";
import HooksTictactoe from "./components/HooksTictactoe";
import HooksResponseCheck from "./components/HooksResponseCheck";
import ClassLotto from "./components/ClassLotto";

// class GameMatcher extends Component {
//   render() {
//     if (this.props.match.params.name === "NumberBaseball") {
//       return <NumberBaseball />;
//     } else if (this.props.match.params.name === "MineSearch") {
//       return <MineSearch />;
//     } else if (this.props.match.params.name === "HooksTictactoe") {
//       return <HooksTictactoe />;
//     } else if (this.props.match.params.name === "HooksResponseCheck") {
//       return <HooksResponseCheck />;
//     } else if (this.props.match.params.name === "ClassLotto") {
//       return <ClassLotto />;
//     }
//     return <NumberBaseball />;
//   }
// }

const GameMatcher = (props) => {
  let urlSerchParams = new URLSearchParams(props.location.search.slice(1));
  console.log(urlSerchParams.get("hello"));

  if (props.match.params.name === "NumberBaseball") {
    return <NumberBaseball />;
  } else if (props.match.params.name === "MineSearch") {
    return <MineSearch />;
  } else if (props.match.params.name === "HooksTictactoe") {
    return <HooksTictactoe />;
  } else if (props.match.params.name === "HooksResponseCheck") {
    return <HooksResponseCheck />;
  } else if (props.match.params.name === "ClassLotto") {
    return <ClassLotto />;
  }
  return <div>일치하는 게임이 없습니다</div>;
};

// export default withRouter(GameMatcher);
export default GameMatcher;
