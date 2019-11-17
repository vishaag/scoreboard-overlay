import React from "react";
import ReactDOM from "react-dom";
import Overlays from "./Overlays";
import OverlayTextControls from "./OverlayTextControls";
import { TimelineLite } from "gsap";
// import { createMachine } from "@xstate/fsm";

class App extends React.Component {
  constructor() {
    super();
    // this.scoreboardTimeline = new TimelineLite({ paused: true });
    this.logoTimeline = new TimelineLite({ paused: false, delay: 2 });

    this.handleScoreTextChange = this.handleScoreTextChange.bind(this);
    this.handleLeftTeamTextChange = this.handleLeftTeamTextChange.bind(this);
    this.handleRightTeamTextChange = this.handleRightTeamTextChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);

    this.animationSequences = {
      one: [],
      two: [{ animation: "main", delay: 0 }],
      three: [{ animation: "teamStat", delay: 0.6 }]
    };

    this.spiderman = {
      leftTeam: {
        primary: "#db251e",
        secondary: "#df3f3a",
        text: "white"
      },
      rightTeam: {
        primary: "white",
        secondary: "#e6e4e6",
        text: "#164d3a"
      },
      common: "#00003f",
      commonSecondary: "#b1d6e3",
      commonText: "white"
    };

    this.state = {
      //replace with API subscriptions
      score: "0-4",
      leftTeam: "KC",
      rightTeam: "GG",
      animationSequence: [
        { animation: "main", delay: 2 },
        { animation: "teamStat", delay: 2 }
      ],
      teamColors: this.spiderman
    };
  }

  handleColorChange(e) {
    if (e.target.value === "spiderman") {
      this.setState({
        teamColors: {
          leftTeam: {
            primary: "#db251e",
            secondary: "#df3f3a",
            text: "white"
          },
          rightTeam: {
            primary: "white",
            secondary: "#e6e4e6",
            text: "#164d3a"
          },
          common: "#00003f",
          commonSecondary: "#b1d6e3",
          commonText: "white"
        }
      });
    } else if (e.target.value === "wolverine") {
      this.setState({
        teamColors: {
          leftTeam: {
            primary: "#a30303",
            secondary: "#b7b7b7",
            text: "white"
          },
          rightTeam: {
            primary: "#ffb400",
            secondary: "#b37e00",
            text: "black"
          },
          common: "#1d2158",
          commonSecondary: "#b1d6e3",
          commonText: "white"
        }
      });
    }
  }

  handleAnimationTransition(e) {
    console.log(e);
    this.setState({
      animationSequence: this.animationSequences[e]
    });
  }

  handleScoreTextChange(e) {
    let text = e.target.value.toUpperCase();
    this.setState({
      score: text
    });
  }
  handleLeftTeamTextChange(e) {
    let text = e.target.value.toUpperCase();
    this.setState({
      leftTeam: text
    });
  }
  handleRightTeamTextChange(e) {
    let text = e.target.value.toUpperCase();
    this.setState({
      rightTeam: text
    });
  }

  render() {
    return (
      <div>
        <span role="img" aria-label="football icon" className="title">
          ⚽ Graphic Overlays Demo
        </span>
        <OverlayTextControls
          overlayScoreText={this.state.score}
          handleScoreTextChange={this.handleScoreTextChange}
          overlayLeftTeamText={this.state.leftTeam}
          handleLeftTeamTextChange={this.handleLeftTeamTextChange}
          overlayRightTeamText={this.state.rightTeam}
          handleRightTeamTextChange={this.handleRightTeamTextChange}
          handleColorChange={this.handleColorChange}
        />
        <div className="state-controls">
          <button onClick={() => this.handleAnimationTransition("two")}>
            Main State
          </button>
          <button onClick={() => this.handleAnimationTransition("three")}>
            Main + teamStat State
          </button>
        </div>
        <Overlays
          animationSequence={this.state.animationSequence}
          // scoreboardTimeline={this.scoreboardTimeline}
          logoTimeline={this.logoTimeline}
          overlayScoreText={this.state.score}
          overlayLeftTeamText={this.state.leftTeam}
          overlayRightTeamText={this.state.rightTeam}
          colors={this.state.teamColors}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
