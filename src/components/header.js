import React from "react";
import { Component } from "react";

import "./header.css";
import Menu from "./mainMenu";
import Splash from "../images/thumbnail_boost2.jpg";

class Header extends Component {
  constructor() {
    super();
    this.state = { landingClicked: "visible" };
    console.log(this.state.landingClicked);
  }

  handleClick() {
    if (this.state.landingClicked == "visible") {
      this.setState({ landingClicked: "invisible" });
    }
  }
  render() {
    return (
      <div>
        <img className={this.state.landingClicked} src={Splash} />
        <div className={this.state.landingClicked}>
          <p>Header</p>
          <a href="/PersonalInfo">Prersonal Info</a>
          <a href="MusicTherapy">Muscial Therapy</a>
          <a href="Imoutofideas">Im out of ideas.</a>
          <p onClick={this.handleClick.bind(this)}>CLick me!</p>
          <Menu className="Main" />
        </div>
      </div>
    );
  }
}

export default Header;
