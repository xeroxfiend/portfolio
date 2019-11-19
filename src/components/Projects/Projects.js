import React, {Component} from "react";
// import watchon from "../../assets/watchon.JPG";
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
      fade:true,
      cssEase: 'linear',
      autoplaySpeed: 4000
    };
    return (
      <div id="projects" className="projects-container">
        <Slider {...settings}>
          <div className="watch1"></div>
          <div className="watch2"></div>
          <div className="watch3"></div>
        </Slider>
        <Slider {...settings}>
          <div className="smakd1"></div>
          <div className="smakd2"></div>
          <div className="smakd3"></div>
          <div className="smakd4"></div>
          <div className="smakd5"></div>
          <div className="smakd6"></div>
        </Slider>
      </div>
    );
    // return (
    //   <div id="projects" className="projects-container">
    //     <span className="projects-title-watchon">WatchOn</span>
    //     <img
    //       onClick={() => window.open("http://watch-on.com")}
    //       src={watchon}
    //       alt="watch-on"
    //       className="watch-on"
    //     />
    //   </div>
    // );
  }
}

export default Projects;
