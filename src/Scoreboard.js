import React from "react";
import hiddenToMainTimeline from "./animations/hiddenToMain";
import hiddenToStatTimeline from "./animations/hiddenToStat";
import logo from "../assets/logo.png";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);

    this.leftTeamBox = null;
    this.leftTeamBoxStrip = null;
    this.leftTeamText = null;

    this.rightTeamBox = null;
    this.rightTeamBoxStrip = null;
    this.rightTeamText = null;

    this.scoreBox = null;
    this.scoreText = null;

    this.timeBox = null;
    this.timeBoxText = null;

    this.teamLogoNameBox = null;

    this.timeline = null;

    this.state = {
      currentState: "one"
    };
  }

  componentDidMount() {
    let animationStates = [];
    let animationDelayObject = {};
    this.props.animationSequence.forEach(animationObject => {
      animationStates.push(animationObject.animation);
      // if delay exists, assign it; else set defualt delay as 0
      if (animationObject.delay) {
        animationDelayObject[
          animationObject.animation
        ] = animationObject.delay.toString();
      } else {
        animationDelayObject[animationObject.animation] = 0;
      }
    });

    if (
      this.state.currentState == "one" &&
      animationStates.includes("main") &&
      animationStates.includes("teamStat")
    ) {
      this.timeline = hiddenToStatTimeline.call(this, animationDelayObject);
      this.timeline.eventCallback("onComplete", () => {
        this.setState({
          currentState: "three"
        });
      });
      this.timeline.play();
    } else if (
      this.state.currentState == "one" &&
      animationStates.includes("main")
    ) {
      this.timeline = hiddenToMainTimeline.call(this, animationDelayObject);
      this.timeline.eventCallback("onComplete", () => {
        this.setState({
          currentState: "two"
        });
      });
      this.timeline.play();
      // console.log("teamStateAnimation");
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

  shouldComponentUpdate(props) {
    console.log("component did update");
    console.log(props);

    // this.timeline.clear();

    return true;
  }

  render() {
    return (
      <svg x="0" y="5" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <svg x="25" y="5">
          <rect
            ref={rect => (this.leftTeamBox = rect)}
            width="75"
            height="40"
            className="left-team-box"
          />
          <rect
            ref={rect => (this.leftTeamBoxStrip = rect)}
            width="10"
            height="40"
            x="65"
            className="left-box-strip"
          />
          <text
            ref={text => (this.leftTeamText = text)}
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            className="left-team-text"
          >
            {this.props.overlayLeftTeamText}
          </text>
        </svg>
        <svg x="100" y="5">
          <rect
            ref={rect => (this.scoreBox = rect)}
            width="75"
            height="40"
            fill="#00003f"
          />
          <text
            ref={text => (this.scoreText = text)}
            className="score-text"
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            {/* {this.props.overlayScoreText} */}
            {this.state.currentState}
          </text>
        </svg>
        <svg x="175" y="5">
          <rect
            ref={rect => (this.rightTeamBox = rect)}
            width="75"
            height="40"
            className="right-team-box"
          />
          <rect
            ref={rect => (this.rightTeamBoxStrip = rect)}
            width="10"
            height="40"
            x="0"
            className="right-box-strip"
          />
          <text
            ref={text => (this.rightTeamText = text)}
            className="right-team-text"
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            {this.props.overlayRightTeamText}
          </text>
        </svg>
        <svg x="250" y="5">
          <rect
            ref={rect => (this.timeBox = rect)}
            width="90"
            height="40"
            fill="#00003f"
          />
          <text
            ref={text => (this.timeBoxText = text)}
            className="score-text"
            x="45"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            90:00
          </text>
        </svg>
        {/* <svg x="250" y="5">
          <rect
            ref={rect => (this.teamLogoNameBox = rect)}
            width="250"
            height="40"
            className="left-team-box "
          ></rect>
          <image
            x="10"
            ref={img => (this.logo = img)}
            alt="match logo"
            xlinkHref={logo}
            height="40"
            width="40"
          />
          <rect
            x="60"
            ref={rect => (this.teamLogoNameBox = rect)}
            width="0.5"
            height="40"
            fill="white"
            opacity="50%"
          ></rect>
          <text
            x="150"
            ref={text => (this.timeBoxText = text)}
            className="score-text"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            Kingston City
          </text>
        </svg> */}
        {/* <svg x="500" y="5">
          <rect
            ref={rect => (this.timeBox = rect)}
            width="150"
            height="40"
            fill="#00003f"
          />
          <text
            ref={text => (this.timeBoxText = text)}
            className="red-cards-text"
            x="60"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            Red Cards
          </text>
          <text
            ref={text => (this.timeBoxText = text)}
            className="score-text"
            x="120"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            0
          </text>
        </svg> */}
      </svg>
    );
  }
}

export default Scoreboard;
