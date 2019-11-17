import React from "react";
import Scoreboard from "./Scoreboard";
import MatchLogo from "./MatchLogo";

class Overlays extends React.Component {
  render() {
    // const scoreboardAnimationSequence = [{ animation: "main", delay: 0 }];
    return (
      <div className="overlays">
        <svg
          width="100%"
          height="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Scoreboard
            animationSequence={this.props.animationSequence}
            // timeline={this.props.scoreboardTimeline}
            overlayScoreText={this.props.overlayScoreText}
            overlayLeftTeamText={this.props.overlayLeftTeamText}
            overlayRightTeamText={this.props.overlayRightTeamText}
          />
          <MatchLogo timeline={this.props.logoTimeline} />
        </svg>
      </div>
    );
  }
}

export default Overlays;
