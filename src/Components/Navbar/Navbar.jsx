import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAntDesign,
} from "react-icons/ai";
import { MdCode } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { RiRocketLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container h-100">
        <div className="logo py-4 d-none d-md-flex">
          <img src={Logo} className="rounded-circle img-fluid me-3" />
          <a className="navbar-brand" href="#">
            BERKANT HURMA
          </a>
        </div>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="d-block d-md-none">
            <CgMenuRight />
          </span>
        </button>
        <div className="collapse navbar-collapse d-flex d-md-block flex-column" id="navbarSupportedContent">
          <div className="logo py-4 d-flex d-md-none flex-column">
            <img src={Logo} className="rounded-circle img-fluid me-3" />
            <br />
            <div>
            <a className="navbar-brand" href="#">
              BERKANT HURMA
            </a>
            </div>
          </div>
          <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                <AiOutlineHome /> AnaSayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <AiOutlineUser /> Hakkımda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <RiRocketLine /> Tecrübelerim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <MdCode /> Projelerim
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <AiOutlineAntDesign /> İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
