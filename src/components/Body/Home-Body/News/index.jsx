import React from "react";
import { IMAGES } from "../../../../assets/images/image";
import "./styles.scss";
function News() {
  const data = [];
  for (let i = 0; i < 5; i++) {
    let obj = {
      key: i,
      picture: IMAGES.DEMO,
      title: "Nhặt được 200 triệu còn đúng mỗi cái nịt. Còn đúng mỗi cái nịt",
      date: "AUGUST 01, 2016",
      content:
        "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo cons Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo cons",
    };
    data.push(obj);
  }
  const renderList = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <div className="n__item" key={index}>
            <img src={item.picture} alt="pictures" />
            <div className="n__itemContent">
              <h2>
                <a className="n__itemTitle" href="">
                  {item.title}
                </a>
              </h2>
              <abbr className="n__itemDate">{item.date}</abbr>
              <span className="n__itemContents">{item.content}</span>
            </div>
          </div>
        );
      });
    }
  };
  return <div className="n__wrapper">{renderList()}</div>;
}

export default News;
