import { TimelineLite } from "gsap";

function hiddenToMain(animationDelayObject) {
  const hiddenToMainTimeline = new TimelineLite({ paused: true });
  hiddenToMainTimeline
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
    );

  return hiddenToMainTimeline;
}

export default hiddenToMain;
