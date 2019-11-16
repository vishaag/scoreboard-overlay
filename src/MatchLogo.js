import React from "react";
import logo from "../assets/logo.png";

class MatchLogo extends React.Component {
  constructor(props) {
    super(props);
    this.logo = null;

    this.timeline = props.timeline;
  }

  componentDidMount() {
    this.timeline.from(this.logo, 1, { opacity: 0 }); // show content div
  }

  render() {
    return (
      <svg
        x="885"
        y="0"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <image
          ref={img => (this.logo = img)}
          alt="match logo"
          xlinkHref={logo}
          height="75"
          width="75"
        />
      </svg>
    );
  }
}

export default MatchLogo;
