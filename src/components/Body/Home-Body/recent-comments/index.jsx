import React from "react";
import { TextMessage } from "../../../../assets/text";
import "./styles.scss";
function RecentComments() {
  let data = [];
  for (let i = 0; i < 3; i++) {
    let obj = {
      name: "Đặng Quốc Thái",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKmBnhgwIEbzpCajWZ6-_J5WE7UqHJNMuOw&usqp=CAU",
      title:
        "Nhặt 50 tỉ còn mỗi cái nịt duy nhất. Dell cÒn cái gì nữaDell cÒn cái gì nữaDel l cÒn cái gì nữa l cÒn cái gì nữa l cÒn cái gì nữa",
    };
    data.push(obj);
  }
  const renderList = () => {
    if (data.length > 0) {
      return data.map((item, index) => {
        return (
          <li className="rc__item" key={index}>
            <div className="rc__image">
              <img src={item.image} alt={item.image} />
            </div>
            <div className="rc__nameAndCmt">
              <div className="rc__name">
                <a href={item.image} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </div>
              <div className="rc__comment">{item.title}</div>
            </div>
          </li>
        );
      });
    }
  };
  return (
    <div className="rc__wrapper">
      <h2 className="rc__h2">{TextMessage.body.RECENT_COMMENTS}</h2>
      {renderList()}
    </div>
  );
}

export default RecentComments;
