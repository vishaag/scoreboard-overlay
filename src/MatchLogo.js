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
      <img
        ref={img => (this.logo = img)}
        alt="match logo"
        src={logo}
        className="logo"
      />
    );
  }
}

export default MatchLogo;
