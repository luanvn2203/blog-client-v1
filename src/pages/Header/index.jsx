import React from "react";
import HeaderInfo from "../../components/Header/Info";
import HeaderNavbar from "../../components/Header/Navbar";
import "./styles.scss";
function NavbarController() {
  return (
    <div className="nc__wrapper">
      <HeaderInfo />
      <HeaderNavbar />
    </div>
  );
}

export default NavbarController;
