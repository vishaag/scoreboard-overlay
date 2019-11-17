import React from "react";
import Scoreboard from "./Scoreboard";
import MatchLogo from "./MatchLogo";
import teamLogo from "../assets/teamLogo.png";

class Overlays extends React.Component {
  render() {
    const teamAttributes = {
      leftTeam: {
        full: "Kingston City"
      },
      rightTeam: {
        full: "Green Gully"
      }
    };

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
            animation={this.props.animationSequence}
            overlayScoreText={this.props.overlayScoreText}
            leftTeamShortText={this.props.overlayLeftTeamText}
            rightTeamShortText={this.props.overlayRightTeamText}
            overlayLogo={teamLogo}
            colors={this.props.colors}
            teamAttributes={teamAttributes}
          />
          <MatchLogo timeline={this.props.logoTimeline} />
        </svg>
      </div>
    );
  }
}

export default Overlays;
