import React from "react";

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = props.timeline;
  }

  render() {
    return (
      <div className="player-controls">
        <button onClick={() => this.timeline.play()}>Play</button>
        <button onClick={() => this.timeline.restart()}>Restart</button>
      </div>
    );
  }
}

export default PlayerControls;
