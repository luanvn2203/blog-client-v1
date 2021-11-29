/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import { Menu, Dropdown, Input, Space } from "antd";
import { DownOutlined, AudioOutlined } from "@ant-design/icons";
import "./styles.scss";
import "antd/dist/antd.css";
function HeaderNavbar() {
  const { Search } = Input;
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          có cái nịt
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="hn__wrapper">
      <Router>
        <div className="hn__container">
          <div className="hn__list">
            <ul>
              <li className="hn__item">
                <NavLink className="header__home" to="/2">
                  Trang chủ
                </NavLink>
              </li>
              <li className="hn__item">
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Tính Năng <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li className="hn__item">
                <NavLink className="header__home" to="/2">
                  Game
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="hn__search">
            <Search
              placeholder="Nhập nội dung cần tìm"
              size="large"
              allowClear
            />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default HeaderNavbar;
