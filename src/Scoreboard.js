import React from "react";

import { Quad } from "gsap";
class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.score = props.score;
    this.animationSequence = props.animationSequence;
    this.timeline = props.timeline;

    this.leftTeam = null;
    this.rightTeam = null;
    this.leftTeamText = null;
    this.rightTeamText = null;
    this.scoreBox = null;
    this.scoreText = null;
    this.time = null;
    this.timeText = null;
  }

  componentDidMount() {
    let states = [];
    let animationDelayObject = {};
    this.animationSequence.forEach(animationObject => {
      states.push(animationObject.animation);
      animationDelayObject[
        animationObject.animation
      ] = animationObject.delay.toString();
    });

    if (states.includes("main") && states.includes("teamStat")) {
      this.timeline.from(
        this.scoreBox,
        1,
        { opacity: 0, x: "-100px" },
        `=${animationDelayObject["main"]}`
      );
    } else if (states.includes("main")) {
      this.timeline.from(this.scoreText, 1, {
        scaleX: 2,
        scaleY: 2,
        opacity: 0,
        transformOrigin: "50% 50%"
      });
    }

    // this.timeline
    // .to(this.leftTeam, 0.5, { x: -50, opacity: 0 }, "+=0.5")
    // .from(this.leftTeam, 1, { opacity: 0, x: "50px" })
    // .from(this.rightTeam, 1, { opacity: 0, x: "-100px" }, "=-1");
    // .set(this.content, { autoAlpha: 1 }) // show content div
    // .from(this.leftTeam, 0.5, { left: 200, autoAlpha: 0 });
    // .from(this.rightTeam, 2.5, { left: -100, autoAlpha: 0 }); // added -0.25 seconds prior to end this.of timeline
    // .from(this.leftTeam, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature"); // added 0.5 seconds after end of timeline
    // .from(this.leftTeam, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25");
    // .staggerFrom(this.leftTeam, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
  }

  render() {
    return (
      <React.Fragment>
        <svg className="SVG" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g>
            <rect
              ref={rect => (this.scoreBox = rect)}
              x="100"
              y="5"
              width="75"
              height="40"
              fill="#00003f"
            />
            <text
              ref={text => (this.scoreText = text)}
              x="120"
              y="32.5"
              className="score-text"
            >
              0-4
            </text>
          </g>
        </svg>
      </React.Fragment>
    );
  }
}

export default Scoreboard;
