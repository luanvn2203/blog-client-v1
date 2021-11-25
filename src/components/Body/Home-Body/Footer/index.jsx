import React from "react";
import { TextMessage } from "../../../../assets/text";
import GenneralPosts from "../../../Components/Genneral-Posts";
import "./styles.scss";
function HomeFooter() {
  let data = [];
  for (let i = 0; i < 3; i++) {
    let obj = {
      link: "https://cdn.pixabay.com/photo/2019/09/27/09/39/melons-4507974__480.jpg",
      image:
        "https://cdn.pixabay.com/photo/2019/09/27/09/39/melons-4507974__480.jpg",
      title: "Nhặt 50 tỉ còn mỗi cái nịt duy nhất. Dell cÒn cái gì nữa",
    };
    data.push(obj);
  }
  const renderRandomPosts = () => {
    if (data.length > 0) {
      return (
        <GenneralPosts data={data} title={TextMessage.body.RANDOM_POST_TITLE} />
      );
    }
  };
  const renderRecentPosts = () => {
    if (data.length > 0) {
      return (
        <GenneralPosts data={data} title={TextMessage.body.RECENT_POSTS} />
      );
    }
  };
  const renderPopularPosts = () => {
    if (data.length > 0) {
      return (
        <GenneralPosts data={data} title={TextMessage.body.POPULAR_POSTS} />
      );
    }
  };
  return (
    <div className="hf__wrapper">
      <div className="hf__container">
        {renderRandomPosts()}
        {renderRecentPosts()}
        {renderPopularPosts()}
      </div>
    </div>
  );
}

export default HomeFooter;
