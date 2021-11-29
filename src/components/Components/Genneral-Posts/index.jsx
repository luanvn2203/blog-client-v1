import React from "react";
import "./styles.scss";
function GenneralPosts(props) {
  const renderList = () => {
    if (props.data.length > 0) {
      return props.data.map((item, index) => {
        return (
          <li className="gp__item" key={index}>
            <div className="gp__image">
              <a href={item.link} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.image} />
                <span className="gp__black"></span>
              </a>
            </div>
            <div className="gp__content">
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
    <div className="gp__wrapper">
      <h2 className="gp__h2">{props.title}</h2>
      {renderList()}
    </div>
  );
}

export default GenneralPosts;
