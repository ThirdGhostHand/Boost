import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext
} from "pure-react-carousel";

import BookStore from "../images/BookStore.PNG";
import Expanse from "../images/Expanse.PNG";
import SurveySender from "../images/SurveySender.PNG";
import WeatherMap from "../images/WeatherMap.PNG";
import YouTubeSearch from "../images/YouTubeSearch.PNG";

import "pure-react-carousel/dist/react-carousel.es.css";
import "./projects.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="MainProjects" id="Projects">
        <CarouselProvider
          naturalSlideWidth={850}
          naturalSlideHeight={400}
          totalSlides={5}
        >
          <div className="slider">
            <Slider className="slider">
              <Slide index={0}>
                <p className="projectDescription">
                  Survey Sender: A service that lets users to send email surveys
                  to collect feedback. Uses Sendgrid to send emails and Stripe
                  to collect payments.
                </p>
                <Image src={SurveySender} />
              </Slide>
              <Slide index={1}>
                <p className="projectDescription">
                  TheExpanse: A gaming community site. Features a landing page
                  that offers live status of the active gaming servers. Uses
                  MERN, Redux, the Gamedig library, and the Discourse Forums.
                </p>
                <Image src={Expanse} />
              </Slide>

              <Slide className="projectText" index={2}>
                <p className="projectDescription">
                  Booker: A simple book shop front! Features a modifiable book
                  catalog and live loading shopping cart! Uses MERN with Redux
                  and Bootstrap. Paper not included.
                </p>
                <Image src={BookStore} />
              </Slide>
              <Slide index={3}>
                <p className="projectDescription">
                  Weather Map: A service that allows users to look up any city
                  in the US, then displays the recent results in some colorful
                  graphs! Only uses React and internet magic.
                </p>
                <Image src={WeatherMap} />
              </Slide>
              <Slide index={4}>
                <p className="projectDescription">
                  My first React Project! Lets users search YouTube and displays
                  the results in realtime. I use it to watch cat videos without
                  ads while eating confetti and nachos.
                </p>
                <Image src={YouTubeSearch} />
              </Slide>
            </Slider>

            <ButtonFirst className="dots">First</ButtonFirst>
            <ButtonBack className="dots">Back</ButtonBack>
            <ButtonNext className="dots">Next</ButtonNext>
            <ButtonLast className="dots">Last</ButtonLast>
          </div>
        </CarouselProvider>
      </div>
    );
  }
}
export default Projects;
