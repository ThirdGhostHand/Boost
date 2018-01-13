import React from "react";
import { Component } from "react";

import "./header.css";
import Menu from "./mainMenu";
import Splash from "../images/boost.jpg";

class Header extends Component {
  constructor() {
    super();
    this.state = { landingClicked: "visible" };
    console.log(this.state.landingClicked);
  }

  handleClick() {
    this.setState({ landingClicked: "invisible" });
  }

  render() {
    return (
      <div>
        <img className={this.state.landingClicked} src={Splash} />
        <div className={this.state.landingClicked}>
          <p>Header</p>
          <p onClick={this.handleClick.bind(this)}>CLick me!</p>
          <Menu className="Main" />
        </div>
      </div>
    );
  }
}

export default Header;
