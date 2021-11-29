import React from "react";
import { TextMessage } from "../../../../assets/text";
import "./styles.scss";
function PopularPosts() {
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
          <li className="pp__item" key={index}>
            <div className="pp__image">
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.image} />
                <span className="pp__black"></span>
              </a>
            </div>
            <div className="pp__content">
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
    <div className="pp__wrapper">
      <h2 className="pp__h2">{TextMessage.body.POPULAR_POSTS}</h2>
      {renderList()}
    </div>
  );
}

export default PopularPosts;
