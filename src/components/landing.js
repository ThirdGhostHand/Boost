import React from "react";
import Plx from "react-plx";

import Cheeta from "../images/cara-fuller-289887.jpg";
import Mac1 from "../images/mac1.png";
import Mac1_1 from "../images/mac1_1.png";
import Mac1_2 from "../images/mac1_2.png";
import Mac1_3 from "../images/mac1_3.png";
import daMan from "../images/me.gif";

import "./landing.css";

const Landing = () => {
  return (
    <div id="Landing">
      <div className="MainLanding">
        <Plx
          className="mac1Plx"
          parallaxData={[
            {
              start: 0,
              duration: 500,
              name: "Mac1",
              properties: [
                {
                  startValue: 1,
                  endValue: 300,
                  property: "translateY"
                },
                {
                  startValue: 1,
                  endValue: 180,
                  property: "rotate"
                }
              ]
            }
          ]}
        >
          <img className="mac1" src={Mac1} />
        </Plx>
        <Plx
          className="mac1_1Plx"
          parallaxData={[
            {
              start: 0,
              duration: 900,
              name: "Mac1_1",
              properties: [
                {
                  startValue: 1,
                  endValue: 250,
                  property: "translateY"
                },
                {
                  startValue: 1,
                  endValue: 100,
                  property: "rotate"
                }
              ]
            }
          ]}
        >
          <img className="mac1_2" src={Mac1_1} />
        </Plx>
        <Plx
          className="mac1_2Plx"
          parallaxData={[
            {
              start: 0,
              duration: 400,
              name: "Mac1_2_Descend",
              properties: [
                {
                  startValue: 0,
                  endValue: 153,
                  property: "translateY"
                },
                {
                  startValue: 1,
                  endValue: 40,
                  property: "rotate"
                }
              ]
            },
            {
              start: 360,
              duration: 300,
              easing: 0.25,
              name: "Mac1_2_rock1",
              properties: [
                {
                  startValue: 40,
                  endValue: 80,
                  property: "rotate"
                }
              ]
            },
            {
              start: 630,
              duration: 450,
              easing: 0.25,
              name: "Mac1_2_rock2",
              properties: [
                {
                  startValue: 80,
                  endValue: 20,
                  property: "rotate"
                }
              ]
            }
          ]}
        >
          <img className="mac1_2" src={Mac1_2} />
        </Plx>
        <Plx
          className="mac1_3Plx"
          parallaxData={[
            {
              start: 0,
              duration: 900,
              name: "Mac1_3",
              properties: [
                {
                  startValue: 1,
                  endValue: 500,
                  property: "translateY"
                },
                {
                  startValue: 1,
                  endValue: 100,
                  property: "rotate"
                }
              ]
            }
          ]}
        >
          <img className="mac1_3" src={Mac1_3} />
        </Plx>
        <div className="LandingProfile">
          <img className="LandingProfilePicture" src={daMan} />
          <h1 className="LandingProfileName">Cody Pardi</h1>
          <h2 className="LandingProfileJob">Software Engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
