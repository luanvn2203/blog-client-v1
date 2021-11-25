import React from "react";
import News from "../../components/Body/Home-Body/News";
import SlideShow from "../../components/Body/Home-Body/slide-show";
import "./styles.scss";
function HomeController() {
  return (
    <div className="hc__wrapper">
      <div className="hc__container">
        <div className="hc__leftContent">
          <SlideShow />
          <News />
        </div>
        <div className="hc__rightContent"></div>
      </div>
    </div>
  );
}

export default HomeController;
