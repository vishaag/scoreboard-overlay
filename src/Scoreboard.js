import React from "react";
import { TimelineLite } from "gsap/all";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.timeline = new TimelineLite({ paused: true });

    this.content = null;

    this.leftTeam = null;
    this.rightTeam = null;
    this.leftTeamText = null;
    this.rightTeamText = null;
    this.score = null;
    this.scoreText = null;
    this.time = null;
    this.timeText = null;
  }

  componentDidMount() {
    this.timeline
      // .to(this.leftTeam, 0.5, { x: -50, opacity: 0 }, "+=0.5")
      .from(this.leftTeam, 1, { opacity: 0, x: "50px" })
      .from(this.rightTeam, 1, { opacity: 0, x: "-100px" }, "=-1");
    // .set(this.content, { autoAlpha: 1 }) // show content div
    // .from(this.leftTeam, 0.5, { left: 200, autoAlpha: 0 });
    // .from(this.rightTeam, 2.5, { left: -100, autoAlpha: 0 }); // added -0.25 seconds prior to end this.of timeline
    // .from(this.leftTeam, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature"); // added 0.5 seconds after end of timeline
    // .from(this.leftTeam, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25");
    // .staggerFrom(this.leftTeam, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
  }

  render() {
    return (
      <div>
        <div>
          <svg className="SVG" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g ref={g => (this.leftTeam = g)}>
              <rect
                x="10"
                y="10"
                width="40"
                height="40"
                stroke="blue"
                fill="blue"
                strokeWidth="5"
              />
              <text
                x="17.5"
                y="32.5"
                fontFamily="Verdana"
                fontSize="10"
                fill="white"
              >
                15
              </text>
            </g>
            <rect
              ref={rect => (this.rightTeam = rect)}
              x="50"
              y="10"
              width="40"
              height="40"
              stroke="white"
              fill="transparent"
              strokeWidth="5"
            />
          </svg>
        </div>
        <div className="my-3 btn-group">
          <button className="btn gsap-btn" onClick={() => this.timeline.play()}>
            Play
          </button>
          <button
            className="btn gsap-btn"
            onClick={() => this.timeline.pause()}
          >
            Pause
          </button>
          <button
            className="btn gsap-btn"
            onClick={() => this.timeline.reverse()}
          >
            Reverse
          </button>
          <button
            className="btn gsap-btn"
            onClick={() => this.timeline.restart()}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Scoreboard;
