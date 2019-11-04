import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll"


export default class HomeSection extends Component {
    render() {
        return (
            <div className={"section" + (this.props.dark ? " section-dark" : "")}>
                <div className="section-content" id={this.props.id}>
                    <h1>{this.props.title}</h1>
                    <div className='contactSection'>
                    <div className='contactUsDiv'>
                        <span>اطلاعات تماس</span>
                        <span>نشانی</span>
                        <span>پست الکترونیکی</span>
                        <span>تلفن</span>
                    </div>
                    <div className='menuContact'>
                    <li className="navItem">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                صفحه اصلی
              </Link>
            </li>
            <li className="navItem">
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
            <li className="navItem">
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
            <li className="navItem">
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
            <li className="navItem">
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
            <li className="navItem">
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
            <li className="navItem">
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
            <li className="navItem">
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
          </div>
                    
        </div>
                    
    </div>
  </div>
        )
    }
}