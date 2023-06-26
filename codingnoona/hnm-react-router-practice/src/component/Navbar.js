import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setAuthenticate, authenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const [width, setWidth] = useState(0);
  const goToHome = () => {
    navigate("/");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-box">
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")} className="login-box">
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="data:image/png;base64,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"
          onClick={goToHome}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
