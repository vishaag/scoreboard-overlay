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
    this.logoTimeline = new TimelineLite({ paused: true });

    this.handleScoreTextChange = this.handleScoreTextChange.bind(this);
    this.handleLeftTeamTextChange = this.handleLeftTeamTextChange.bind(this);
    this.handleRightTeamTextChange = this.handleRightTeamTextChange.bind(this);

    // this.animateMachine = createMachine({
    //   id: "animateMachine",
    //   initial: "one",
    //   states: {
    //     one: { on: { MAIN: "two" } },
    //     two: { on: { STATS: "three", HIDDEN: "one" } },
    //     three: { on: { MAIN: "two", HIDDEN: "one" } }
    //   }
    // });

    // this.animationSequences = {
    //   one: [],
    //   two: [{ animation: "main", delay: 0 }],
    //   three: [
    //     { animation: "main", delay: 0 },
    //     { animation: "teamStat", delay: 0.6 }
    //   ]
    // };

    this.animationSequences = {
      one: [],
      two: [{ animation: "main", delay: 0 }],
      three: [{ animation: "teamStat", delay: 0.6 }]
    };

    this.state = {
      //replace with API subscriptions
      score: "0-4",
      leftTeam: "KC",
      rightTeam: "GG",
      animationSequence: [
        { animation: "main", delay: 2 },
        { animation: "teamStat", delay: 2 }
      ]
    };
  }

  handleAnimationTransition(e) {
    console.log(e);
    this.setState({
      animationSequence: this.animationSequences[e]
    });
  }

  handleScoreTextChange(e) {
    this.setState({
      score: e.target.value
    });
  }
  handleLeftTeamTextChange(e) {
    this.setState({
      leftTeam: e.target.value
    });
  }
  handleRightTeamTextChange(e) {
    this.setState({
      rightTeam: e.target.value
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
        />
        <Overlays
          animationSequence={this.state.animationSequence}
          // scoreboardTimeline={this.scoreboardTimeline}
          logoTimeline={this.logoTimeline}
          overlayScoreText={this.state.score}
          overlayLeftTeamText={this.state.leftTeam}
          overlayRightTeamText={this.state.rightTeam}
        />
        {/* <AnimationControls
          scoreboardAnimationSequence={this.scoreboardAnimationSequence}
        /> */}
        <button onClick={() => this.handleAnimationTransition("two")}>
          Two
        </button>
        <button onClick={() => this.handleAnimationTransition("three")}>
          Three
        </button>

        {/* <PlayerControls
          scoreboardTimeline={this.scoreboardTimeline}
          logoTimeline={this.logoTimeline}
        /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
