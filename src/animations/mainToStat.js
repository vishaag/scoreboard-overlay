import { TimelineLite } from "gsap";

function mainToStat() {
  const mainToStatTimeline = new TimelineLite({ paused: true });
  mainToStatTimeline
    .to(this.timeBox, 0.5, {
      x: "-20",
      opacity: 0
    })
    .to(
      this.timeBoxText,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.5"
    )
    .to(this.teamLogoNameBox, 0.5, {
      scaleX: 1,
      opacity: 1,
      transformOrigin: "left"
    })
    .to(
      this.logo,
      0.5,
      {
        x: "0",
        opacity: 1
      },
      "=-0.4"
    )
    .to(
      this.logoNameBoxSliver,
      0.5,
      {
        x: "0",
        opacity: 0.5
      },
      "=-0.4"
    )
    .to(
      this.fullTeamName,
      0.5,
      {
        x: "0",
        opacity: 1
      },
      "=-0.4"
    )
    .to(
      this.warningCardBox,
      0.5,
      {
        scaleX: 1,
        opacity: 1
      },
      "=-0.2"
    )
    .to(
      this.warningCardBoxText1,
      0.5,
      {
        opacity: 1
      },
      "=-0.5"
    )
    .to(
      this.warningCardBoxText2,
      0.5,
      {
        opacity: 1
      },
      "=-0.5"
    );
  return mainToStatTimeline;
}

export default mainToStat;
