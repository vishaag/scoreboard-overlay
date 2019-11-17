import React from "react";

function OverlayTextControls(props) {
  return (
    <div>
      <input
        value={props.overlayScoreText}
        onChange={props.handleScoreTextChange}
      ></input>
      <input
        value={props.overlayLeftTeamText}
        onChange={props.handleLeftTeamTextChange}
      ></input>
      <input
        value={props.overlayRightTeamText}
        onChange={props.handleRightTeamTextChange}
      ></input>
    </div>
  );
}

export default OverlayTextControls;
