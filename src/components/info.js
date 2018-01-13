import React from "react";
import Cheeta from "../images/cara-fuller-289887.jpg";
import "./info.css";

const Info = () => {
  return (
    <div id="Info" className="InfoWrapper">
      <div className="About">
        <h2>A little about me,</h2>
        <p className="bio">
          Once upon a time, there was a happy dude who, while on a quest to
          discover the world, stumbled into a circle of coding wizards that
          taught him from their tomes of JavaScript! It wasn’t long after, that
          the happy dude realized the unlimited potential of the creative powers
          that had been bestowed upon him! So he set out into the world, to
          explore the rabbit hole of software development.
        </p>

        <p className="bio">
          Hii! I’m Cody, and I’m a full stack web developer! I’m patient,
          persistent, very open-minded, creative, and people-friendly!
        </p>
        <p className="bio">I like technology, stories, cats, and food.</p>
      </div>
      <img className="InfoPicture" src={Cheeta} />
      <div className="Info">
        <h2>Codes I’ve coded in:</h2>
        <ul>
          <li>
            I'm best at,
            <ul>
              <li>
                Javascript:
                <ul>
                  <li>ReactJS, Redux, NodeJS, Mongo, AngularJS, JQuery;</li>
                </ul>
              </li>
              <li>HTML5; </li>
              <li>CSS: </li>
              <ul>
                <li>Bootstrap, MateralizeCSS, SemanticUI;</li>
              </ul>
            </ul>
          </li>
          <li>I’ve also programmed in,</li>
          <ul>
            <li>
              C#: ASP.NET Core, Postgresql;
              <li>Python: Django, MySQL, Flask;</li>
              <li>Java (Game modding);</li>
              <li>Lua (Game modding);</li>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Info;
