import React from "react";
import { TextMessage } from "../../../../assets/text";
import "./styles.scss";
function Tags() {
  let data = [];
  for (let i = 0; i < 8; i++) {
    let obj = {
      id: i,
      name: "Cái nịt " + i,
    };
    data.push(obj);
  }
  const renderList = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return <li className="tag__item">{item.name}</li>;
      });
    }
  };
  return (
    <div className="tag__wrapper">
      <h2 className="tag__h2">{TextMessage.body.TAGS}</h2>
      {renderList()}
    </div>
  );
}

export default Tags;
