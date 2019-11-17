import { TimelineLite } from "gsap";

function hiddenToStat(animationDelayObject) {
  const hiddenToStatTimeline = new TimelineLite({ paused: true });
  hiddenToStatTimeline
    .from(
      this.scoreText,
      0.3,
      {
        scaleX: 2,
        scaleY: 2,
        opacity: 0,
        transformOrigin: "50% 50%"
      },
      `+=${animationDelayObject["main"]}`
    )
    .from(
      this.scoreBox,
      0.3,
      {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "50% 50%"
      },
      "=-0.3"
    )
    .from(this.leftTeamBox, 0.2, {
      scaleX: 0.2,
      opacity: 0,
      transformOrigin: "right"
    })
    .from(
      this.leftTeamBoxStrip,
      0.2,
      {
        scaleX: 0.2,
        opacity: 0,
        transformOrigin: "right"
      },
      "=-0.2"
    )
    .from(
      this.leftTeamText,
      0.2,
      {
        x: 20,
        opacity: 0
      },
      "=-0.2"
    )
    .from(
      this.rightTeamBox,
      0.2,
      {
        scaleX: 0.2,
        opacity: 0,
        transformOrigin: "left"
      },
      "=-0.2"
    )
    .from(
      this.rightTeamBoxStrip,
      0.2,
      {
        scaleX: 0.2,
        opacity: 0,
        transformOrigin: "left"
      },
      "=-0.2"
    )
    .from(
      this.rightTeamText,
      0.2,
      {
        x: -20,
        opacity: 0
      },
      "=-0.2"
    )
    .from(
      this.timeBox,
      0.5,
      {
        x: -20,
        opacity: 0
      },
      "=-0.2"
    )
    .from(
      this.timeBoxText,
      0.5,
      {
        x: -20,
        opacity: 0
      },
      "=-0.2"
    )
    .to(
      this.timeBox,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      `+=${animationDelayObject["teamStat"]}`
    )
    .to(
      this.timeBoxText,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.5"
    )
    .from(this.teamLogoNameBox, 0.5, {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left"
    })
    .from(
      this.logo,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .from(
      this.logoNameBoxSliver,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .from(
      this.fullTeamName,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .from(
      this.warningCardBox,
      0.5,
      {
        scaleX: 0,
        opacity: 0
      },
      "=-0.2"
    )
    .from(
      this.warningCardBoxText1,
      0.5,
      {
        opacity: 0
      },
      "=-0.5"
    )
    .from(
      this.warningCardBoxText2,
      0.5,
      {
        opacity: 0
      },
      "=-0.5"
    );
  return hiddenToStatTimeline;
}

export default hiddenToStat;
