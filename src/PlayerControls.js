import React from "react";

class PlayerControls extends React.Component {
  constructor({ scoreboardTimeline, logoTimeline }) {
    super({ scoreboardTimeline, logoTimeline });
    this.scoreboardTimeline = scoreboardTimeline;
    this.logoTimeline = logoTimeline;
  }

  render() {
    return (
      <div className="player-controls">
        <button
          onClick={() => {
            this.scoreboardTimeline.play();
            this.logoTimeline.play();
          }}
        >
          Play
        </button>
        <button
          onClick={() => {
            this.scoreboardTimeline.restart();
            this.logoTimeline.restart();
          }}
        >
          Restart
        </button>
      </div>
    );
  }
}

export default PlayerControls;
