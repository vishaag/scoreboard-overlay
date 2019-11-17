import { TimelineLite } from "gsap";

function statToMain() {
  const statToMainTimeline = new TimelineLite({ paused: true });
  statToMainTimeline
    .to(
      this.warningCardBoxText2,
      0.5,
      {
        opacity: 0
      },
      "=3"
    )
    .to(
      this.warningCardBoxText1,
      0.5,
      {
        opacity: 0
      },
      "=-0.5"
    )
    .to(
      this.warningCardBox,
      0.5,
      {
        scaleX: 0,
        opacity: 0
      },
      "=-0.2"
    )
    .to(
      this.fullTeamName,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .to(
      this.logoNameBoxSliver,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .to(
      this.logo,
      0.5,
      {
        x: "-20",
        opacity: 0
      },
      "=-0.4"
    )
    .to(this.teamLogoNameBox, 0.5, {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left"
    });

  return statToMainTimeline;
}

export default statToMain;
