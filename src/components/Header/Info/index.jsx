import React from "react";
import { Tooltip } from "antd";
import { IMAGES } from "../../../assets/images/image";
import "./styles.scss";
import "antd/dist/antd.css";
import { TextMessage } from "../../../assets/text";
function HeaderInfo() {
  return (
    <div className="hi__wrapper">
      <div className="hi__container">
        <div className="hi__logo">
          <img src={IMAGES.LOGO} alt="logo" />
        </div>
        <div className="hi__info">
          <a
            href={TextMessage.header.ADMIN_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip placement="bottom" title={TextMessage.header.ADMIN}>
              <img src={IMAGES.ADMIN} alt="Admin" />
            </Tooltip>
          </a>
          <a
            href={TextMessage.header.FRONTEND_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip placement="bottom" title={TextMessage.header.FRONTEND}>
              <img src={IMAGES.FRONTEND} alt="FrontEnd" />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;
