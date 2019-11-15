import React from "react";
import Scoreboard from "./Scoreboard";
import MatchLogo from "./MatchLogo";

class Overlays extends React.Component {
  constructor({ scoreboardTimeline, logoTimeline }) {
    super({ scoreboardTimeline, logoTimeline });
    this.scoreboardTimeline = scoreboardTimeline;
    this.logoTimeline = logoTimeline;
  }
  render() {
    const finalScore = "1-0";
    const scoreboardAnimationSequence = [{ animation: "main", delay: 1 }];
    return (
      <div className="overlays">
        <Scoreboard
          score={finalScore}
          animationSequence={scoreboardAnimationSequence}
          timeline={this.scoreboardTimeline}
        />
        <MatchLogo timeline={this.logoTimeline} />
      </div>
    );
  }
}

export default Overlays;
