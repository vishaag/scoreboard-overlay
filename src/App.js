import React from "react";
import ReactDOM from "react-dom";
import Overlays from "./Overlays";
import PlayerControls from "./PlayerControls";
import { TimelineLite } from "gsap";

class App extends React.Component {
  constructor() {
    super();
    this.scoreboardTimeline = new TimelineLite({ paused: true });
    this.logoTimeline = new TimelineLite({ paused: true });
  }
  render() {
    return (
      <div>
        <span role="img" aria-label="football icon" className="title">
          ⚽ Graphic Overlays Demo
        </span>
        <Overlays
          scoreboardTimeline={this.scoreboardTimeline}
          logoTimeline={this.logoTimeline}
        />
        <PlayerControls
          scoreboardTimeline={this.scoreboardTimeline}
          logoTimeline={this.logoTimeline}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
