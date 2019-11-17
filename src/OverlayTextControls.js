import React from "react";

function OverlayTextControls(props) {
  return (
    <div className="state-controls">
      Score
      <input
        maxLength={3}
        value={props.overlayScoreText}
        onChange={props.handleScoreTextChange}
      ></input>
      Left Team
      <input
        maxLength={2}
        value={props.overlayLeftTeamText}
        onChange={props.handleLeftTeamTextChange}
        className="props-input"
      ></input>
      Right Team
      <input
        maxLength={2}
        textTransform="uppercase"
        value={props.overlayRightTeamText}
        onChange={props.handleRightTeamTextChange}
        className="props-input"
      ></input>
      Colors
      <select onChange={props.handleColorChange} t>
        <option value="spiderman" selected>
          Spiderman
        </option>
        <option value="wolverine">Wolverine</option>
      </select>
    </div>
  );
}

export default OverlayTextControls;
