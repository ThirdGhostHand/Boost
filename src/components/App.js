import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import ReallySmoothScroll from "really-smooth-scroll";

import Header from "./header";
import Landing from "./landing";
import Info from "./info";
import Footer from "./footer";
import Projects from "./projects";

ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 6, // Default
  keydownSensitivity: 6 // Default (When you press arrow down/up key)
});

configureAnchors({ offset: -58, scrollDuration: 0.01 });

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <ScrollableAnchor id={"Landing"}>
            <Header />
          </ScrollableAnchor>
          <Landing />
          <ScrollableAnchor id={"Info"}>
            <Info />
          </ScrollableAnchor>
          <ScrollableAnchor id={"Projects"}>
            <Projects />
          </ScrollableAnchor>
          <ScrollableAnchor id={"Footer"}>
            <Footer />
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}
