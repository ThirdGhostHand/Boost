import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./header";
import MusicTherapy from "./MusicTherapy";
const PersonalInfo = () => <h2>PersonalInfo</h2>;
const Test = () => <h2>Test</h2>;

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header} />
            <Route path="/MusicTheropy" component={MusicTherapy} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
