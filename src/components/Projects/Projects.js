import React, {Component} from "react";
import Slider from "react-slick";

class Projects extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: "linear",
      autoplaySpeed: 4000,
    };
    return (
      <div id="projects" className="projects-container">
        <header className="projects-title">Projects</header>
        <div className="projects-inner">
          <div
            onClick={() => window.open("https://www.lotimus.com")}
            className="lotimus"
          >
            <div className="lotimus-title">Lotimus</div>
            <div className="lotimus-desc">
              A meditation audio streaming application!
            </div>
            <Slider {...settings}>
              <div className="lotimus1"></div>
              <div className="lotimus2"></div>
              <div className="lotimus3"></div>
              <div className="lotimus4"></div>
              <div className="lotimus5"></div>
              <div className="lotimus6"></div>
            </Slider>
          </div>
          <div
            onClick={() => window.open("https://www.watch-on.com")}
            className="watchon"
          >
            <div className="watchon-title">WatchOn</div>
            <div className="watchon-desc">
              A simple media search that shows where Movies and TV shows can be
              streamed!
            </div>
            <Slider {...settings}>
              <div className="watch1"></div>
              <div className="watch2"></div>
              <div className="watch3"></div>
            </Slider>
          </div>
          <div
            onClick={() => window.open("https://www.smakd.fun")}
            className="smakd"
          >
            <div className="smakd-title">Smakd!</div>
            <div className="smakd-desc">
              A mobile focused multiplayer game about silly questions and
              answers!
            </div>
            <Slider {...settings}>
              <div className="smakd1"></div>
              <div className="smakd2"></div>
              <div className="smakd3"></div>
              <div className="smakd4"></div>
              <div className="smakd5"></div>
              <div className="smakd6"></div>
              <div className="smakd7"></div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
