import React from "react";
import Swal from "sweetalert2";
import { Tooltip } from "antd";
import { IMAGES } from "../../../assets/images/image";
import "./styles.scss";
import "antd/dist/antd.css";
import { textLocal, TextMessage } from "../../../assets/text";
import { useDispatch, useSelector } from "react-redux";
import ModalGeneral from "../../Components/Modal";
import {
  onClickModalLogin,
  onClickModalOpen,
  onClickModalRegister,
} from "../../../redux/slices/modalState";
import LoginForm from "../../Components/Modal/Login";
import RegisterForm from "../../Components/Modal/Register";
import { resetFormResgister } from "../../../redux/slices/userSlice";
import { getLocalStorage } from "../../../assets/helper";
function HeaderInfo() {
  const dispatch = useDispatch();
  const { modalOpen, modalLogin } = useSelector((state) => state.modal);
  const handleOpenModalOption = () => {
    Swal.fire({
      title: "<strong>Vui lòng chọn thao tác</strong>",
      icon: "question",
      showCloseButton: true,
      showDenyButton: true,
      focusConfirm: false,
      allowOutsideClick: false,
      confirmButtonText: "Đăng Nhập",
      denyButtonText: "Đăng Ký",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("open modal login");
        dispatch(onClickModalLogin(true));
        dispatch(onClickModalOpen(true));
      } else if (result.isDenied) {
        console.log("open modal register");
        dispatch(onClickModalRegister(true));
        dispatch(onClickModalOpen(true));
      }
    });
  };
  const handleLogoutAccount = () => {
    localStorage.removeItem(textLocal.USER_INFO);
  };
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
          {getLocalStorage("userInfo") === null ? (
            <Tooltip placement="bottom" title={TextMessage.header.ACCOUNT}>
              <img
                className="hi__account"
                src={IMAGES.USER}
                alt="Account"
                onClick={handleOpenModalOption}
              />
            </Tooltip>
          ) : (
            <Tooltip placement="bottom" title={TextMessage.header.LOGOUT}>
              <img
                className="hi__account"
                src={IMAGES.LOGOUT}
                alt="Account"
                onClick={handleLogoutAccount}
              />
            </Tooltip>
          )}
        </div>
      </div>
      <ModalGeneral
        open={modalOpen}
        cancel={() => {
          dispatch(onClickModalOpen(false));
          dispatch(onClickModalLogin(false));
          dispatch(onClickModalRegister(false));
          dispatch(resetFormResgister(true));
        }}
        title={
          modalLogin === true
            ? TextMessage.info.TITLE_FORM_LOGIN
            : TextMessage.info.TITLE_FORM_REGISTER
        }
      >
        {modalLogin === true ? <LoginForm /> : <RegisterForm />}
      </ModalGeneral>
    </div>
  );
}

export default HeaderInfo;
