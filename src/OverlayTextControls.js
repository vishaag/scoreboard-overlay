import React from "react";

function OverlayTextControls(props) {
  return (
    <div className="state-controls">
      Score
      <input
        value={props.overlayScoreText}
        onChange={props.handleScoreTextChange}
      ></input>
      Left Team
      <input
        value={props.overlayLeftTeamText}
        onChange={props.handleLeftTeamTextChange}
      ></input>
      Right Team
      <input
        value={props.overlayRightTeamText}
        onChange={props.handleRightTeamTextChange}
      ></input>
    </div>
  );
}

export default OverlayTextControls;
