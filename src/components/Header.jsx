import React from "react";
import { useState } from "react";
import logo from "../assets/desktop/logo.svg";
import hamburger from "../assets/mobile/icon-hamburger.svg";
import closeIcon from "../assets/mobile/icon-cross.svg";
const Header = () => {
  const [nav, OnNavOpen] = useState(false);

  const primaryNav = document.querySelector(".primary__nav");
  const OnOpenNavigation = () => {
    OnNavOpen(!nav);
  };
  return (
    <header className="header container">
      <img src={logo} alt="" className="header__img" />
      <img
        src={nav ? closeIcon : hamburger}
        alt=""
        className="hamburger"
        onClick={OnOpenNavigation}
      />
      <nav className={!nav ? "nav__close primary__nav" : "primary__nav"}>
        <ul role="list" className="nav__list">
          <li className="nav__items">
            <a href="./" className="fs-nav--link text-white">
              About
            </a>
          </li>
          <li className="nav__items">
            <a href="./" className="fs-nav--link text-white">
              Service
            </a>
          </li>
          <li className="nav__items">
            <a href="./" className="fs-nav--link text-white">
              Projects
            </a>
          </li>
          <li className="nav__items">
            <a href="./" className="btn btn-nav fs-btn-nav">
              Schedule a call
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
