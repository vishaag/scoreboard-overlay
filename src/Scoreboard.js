import React from "react";
import hiddenToMainTimeline from "./animations/hiddenToMain";
import hiddenToStatTimeline from "./animations/hiddenToStat";
import statToMainTimeline from "./animations/statToMain";
import mainToStatTimeline from "./animations/mainToStat";

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
    this.logo = null;
    this.logoNameBoxSliver = null;
    this.fullTeamName = null;

    this.warningCardBox = null;
    this.warningCardBoxText1 = null;
    this.warningCardBoxText2 = null;

    this.timeline = null;

    this.state = {
      currentState: "one"
    };
  }

  componentDidMount() {
    let animationStates = [];
    let animationDelayObject = {};
    this.props.animation.forEach(animationObject => {
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
    }
  }

  shouldComponentUpdate(props) {
    if (this.timeline.isActive()) {
      return true;
    }
    let animationStates = [];

    const nextAnimationSequence = props.animation;

    nextAnimationSequence.forEach(animationObject => {
      animationStates.push(animationObject.animation);
    });

    if (
      this.state.currentState == "three" &&
      animationStates.includes("main") &&
      !animationStates.includes("teamStat")
    ) {
      this.timeline = statToMainTimeline.call(this);
      this.timeline.eventCallback("onComplete", () => {
        this.setState({
          currentState: "two"
        });
      });
      this.timeline.play();
    }
    if (
      this.state.currentState == "two" &&
      !animationStates.includes("main") &&
      animationStates.includes("teamStat")
    ) {
      this.timeline = mainToStatTimeline.call(this);
      this.timeline.eventCallback("onComplete", () => {
        this.setState({
          currentState: "three"
        });
      });
      this.timeline.play();
    }
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
            fill={this.props.colors.leftTeam.primary}
          />
          <rect
            ref={rect => (this.leftTeamBoxStrip = rect)}
            width="10"
            height="40"
            x="65"
            fill={this.props.colors.leftTeam.secondary}
            className="left-box-strip"
          />
          <text
            ref={text => (this.leftTeamText = text)}
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            className="left-team-text"
            fill={this.props.colors.leftTeam.text}
          >
            {this.props.leftTeamShortText}
          </text>
        </svg>
        <svg x="100" y="5">
          <rect
            ref={rect => (this.scoreBox = rect)}
            width="75"
            height="40"
            fill={this.props.colors.common}
          />
          <text
            ref={text => (this.scoreText = text)}
            className="score-text"
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.commonText}
          >
            {this.props.overlayScoreText}
          </text>
        </svg>
        <svg x="175" y="5">
          <rect
            ref={rect => (this.rightTeamBox = rect)}
            width="75"
            height="40"
            className="right-team-box"
            fill={this.props.colors.rightTeam.primary}
          />
          <rect
            ref={rect => (this.rightTeamBoxStrip = rect)}
            width="10"
            height="40"
            x="0"
            className="right-box-strip"
            fill={this.props.colors.rightTeam.secondary}
          />
          <text
            ref={text => (this.rightTeamText = text)}
            className="right-team-text"
            x="37.5"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.rightTeam.text}
          >
            {this.props.rightTeamShortText}
          </text>
        </svg>
        <svg x="250" y="5">
          <rect
            ref={rect => (this.timeBox = rect)}
            width="90"
            height="40"
            fill={this.props.colors.common}
          />
          <text
            ref={text => (this.timeBoxText = text)}
            className="score-text"
            x="45"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.commonText}
          >
            90:00
          </text>
        </svg>
        <svg x="250" y="5">
          <rect
            ref={rect => (this.teamLogoNameBox = rect)}
            width="250"
            height="40"
            className="left-team-box "
            fill={this.props.colors.leftTeam.primary}
          ></rect>
          <image
            x="15"
            y="5"
            ref={img => (this.logo = img)}
            alt="match logo"
            xlinkHref={this.props.overlayLogo}
            height="30"
            width="30"
          />
          <rect
            x="60"
            ref={rect => (this.logoNameBoxSliver = rect)}
            width="0.5"
            height="40"
            fill="white"
            opacity="50%"
          ></rect>
          <text
            x="150"
            ref={text => (this.fullTeamName = text)}
            className="score-text"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.leftTeam.text}
          >
            {this.props.teamAttributes.leftTeam.full}
          </text>
        </svg>
        <svg x="500" y="5">
          <rect
            ref={rect => (this.warningCardBox = rect)}
            width="150"
            height="40"
            fill={this.props.colors.common}
          />
          <text
            ref={text => (this.warningCardBoxText1 = text)}
            className="red-cards-text"
            x="60"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.commonSecondary}
          >
            Red Cards
          </text>
          <text
            ref={text => (this.warningCardBoxText2 = text)}
            className="score-text"
            x="120"
            y="20"
            textAnchor="middle"
            alignmentBaseline="central"
            fill={this.props.colors.commonText}
          >
            0
          </text>
        </svg>
      </svg>
    );
  }
}

export default Scoreboard;
