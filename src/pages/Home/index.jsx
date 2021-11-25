import React from "react";
import { TextMessage } from "../../assets/text";
import HomeFooter from "../../components/Body/Home-Body/Footer";
import News from "../../components/Body/Home-Body/News";
import PopularPosts from "../../components/Body/Home-Body/popular-posts";
import RandomPosts from "../../components/Body/Home-Body/random-posts";
import RecentComments from "../../components/Body/Home-Body/recent-comments";
import SlideShow from "../../components/Body/Home-Body/slide-show";
import Tags from "../../components/Body/Home-Body/Tags";
import "./styles.scss";
function HomeController() {
  return (
    <div className="hc__wrapper">
      <div className="hc__container">
        <div className="hc__content">
          <div className="hc__leftContent">
            <SlideShow />
            <News />
          </div>
          <div className="hc__rightContent">
            <RandomPosts />
            <RecentComments />
            <PopularPosts />
            <Tags />
          </div>
        </div>
      </div>
      <div className="hc__footer">
        <HomeFooter />
      </div>
      <div className="hc__copy">{TextMessage.body.CLONE}</div>
    </div>
  );
}

export default HomeController;
