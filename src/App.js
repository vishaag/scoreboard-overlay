import React from "react";
import ReactDOM from "react-dom";
import Scoreboard from "./Scoreboard";

class App extends React.Component {
  render() {
    const finalScore = "1-0";
    const animationSequenceArray = [{ animation: "main", delay: 0 }];
    return (
      <div>
        <Scoreboard score={finalScore} animation={animationSequenceArray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
