import React from "react";
import Scoreboard from "./Scoreboard";
import MatchLogo from "./MatchLogo";

class Overlays extends React.Component {
  constructor({ timeline }) {
    super();
    this.timeline = timeline;
  }
  render() {
    const finalScore = "1-0";
    const animationSequence = [{ animation: "main", delay: 0 }];
    return (
      <div className="overlays">
        <Scoreboard
          score={finalScore}
          animation={animationSequence}
          timeline={this.timeline}
        />
        <MatchLogo timeline={this.timeline} />
      </div>
    );
  }
}

export default Overlays;
