import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section10"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                تماس با ما
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section9"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                حامیان
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section8"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                سوالات متداول
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section7"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               ارسال مقالات
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                برنامه روز دوم
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                برنامه روز اول
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                محور های همایش
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                درباره پایکان
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                خانه
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              ثبت نام
              </Link>
            </li>
        </div>
      </nav>
    );
  }
}
