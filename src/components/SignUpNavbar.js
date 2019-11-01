import React, { Component } from "react"
import logo from "../logo.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import { Link as LinkTo } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-contents">
            <li className="nav-items">
              <LinkTo to='/' className='signUpLinks'>صفحه اصلی</LinkTo>
            </li>
        </div>
      </nav>
    );
  }
}
