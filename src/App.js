import React from "react";
import ReactDOM from "react-dom";
import Overlays from "./Overlays";
import PlayerControls from "./PlayerControls";
import { TimelineLite } from "gsap";

class App extends React.Component {
  constructor() {
    super();
    this.timeline = new TimelineLite({ paused: true });
  }
  render() {
    return (
      <div>
        <Overlays timeline={this.timeline} />
        <PlayerControls timeline={this.timeline} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
