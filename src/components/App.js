import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./header";
import MusicTherapy from "./MusicTherapy";
import PersonalInfo from "./PersonalInfo";
import Imoutofideas from "./ImoutofIdeas";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route path="/PersonalInfo" component={MusicTherapy} />
            <Route path="/MusicTheropy" component={MusicTherapy} />
            <Route path="/Imoutofideas" component={MusicTherapy} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
