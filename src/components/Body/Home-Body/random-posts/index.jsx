import React from "react";
import { TextMessage } from "../../../../assets/text";
import "./styles.scss";
function RandomPosts() {
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
  const renderList = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <li className="rp__item" key={index}>
            <div className="rp__image">
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.image} />
                <span className="rp__black"></span>
              </a>
            </div>
            <div className="rp__content">
              <h3>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </h3>
            </div>
          </li>
        );
      });
    }
  };
  return (
    <div className="rp__wrapper">
      <h2 className="rp__h2">{TextMessage.body.RANDOM_POST_TITLE}</h2>
      {renderList()}
    </div>
  );
}

export default RandomPosts;
