import React from "react";

import Mac1 from "../images/mac1.png";
import Mac1_1 from "../images/mac1_1.png";
import Mac1_2 from "../images/mac1_2.png";
import Mac1_3 from "../images/mac1_3.png";

import "./footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "not at bottom"
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset + 10;
    if (windowBottom >= docHeight) {
      this.setState({
        contact: "contacting",
        rain: "raining",
        rain1: "raining1",
        rain2: "raining2",
        rain3: "raining3",
        rain4: "raining4",
        rain5: "raining5",
        rain6: "raining6",
        rain7: "raining7",
        rain8: "raining8",
        rain9: "raining9",
        rain10: "raining10"
      });
      console.log("Raining");
    } else {
      this.setState({
        contact: "notContacting",
        rain: "notRaining",
        rain1: "notRaining1",
        rain2: "notRaining2",
        rain3: "notRaining3",
        rain4: "notRaining4",
        rain5: "notRaining5",
        rain6: "notRaining6",
        rain7: "notRaining7",
        rain8: "notRaining8",
        rain9: "notRaining9"
      });
      console.log("Not raining");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="Footer">
        <a id="Contact" />
        <img className={this.state.rain} src={Mac1} />
        <img className={this.state.rain1} src={Mac1_1} />
        <img className={this.state.rain2} src={Mac1_3} />
        <img className={this.state.rain3} src={Mac1_3} />
        <img className={this.state.rain4} src={Mac1} />
        <div className={this.state.contact}>
          <h3>Contact</h3>
          <a
            className="contacts"
            href="mailto:pcpportfolio@outlook.com?Subject=Macaroni%20is%20the%20finest."
            target="_top"
          >
            Email
          </a>

          <a className="contacts" href="https://github.com/ThirdGhostHand">
            Github
          </a>
          <a
            className="contacts"
            href="https://www.linkedin.com/in/cody-pardi-3995ba13a/"
          >
            LinkedIn
          </a>
        </div>
        <img className={this.state.rain5} src={Mac1} />
        <img className={this.state.rain6} src={Mac1_1} />
        <img className={this.state.rain7} src={Mac1_2} />
        <img className={this.state.rain8} src={Mac1_3} />
        <img className={this.state.rain9} src={Mac1} />
      </div>
    );
  }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
