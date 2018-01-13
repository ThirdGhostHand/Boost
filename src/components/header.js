import React from "react";

import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "headerOnTop"
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
    const docHeight = Math.min(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowTop = windowHeight + window.pageYOffset - 20;
    if (windowTop <= docHeight) {
      this.setState({
        header: "headerOnTop"
      });
    } else {
      this.setState({
        header: "headerNotOnTop"
      });
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
      <div className={this.state.header}>
        <a className="links" href="#Landing">
          Landing{" "}
        </a>
        <a className="links" href="#Info">
          Info{" "}
        </a>
        <a className="links" href="#Projects">
          Projects{" "}
        </a>
        <a className="links" href="#Contact">
          Contact{" "}
        </a>
      </div>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
