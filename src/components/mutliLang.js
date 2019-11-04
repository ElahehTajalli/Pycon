import React from 'react'
import dummyText from "../DummyText"
import ContactSectionContainer from '../container/ContactSectionContainer'
import { Link, animateScroll as scroll } from "react-scroll"
import { Link as LinkTo } from 'react-router-dom'

export const FaSection = () => (
    <>
        <FaSections
        title="درباره پایکان"
        subtitle={dummyText}
        dark={true}
        id="section3"
        />
        <FaSections
        title="محور های همایش"
        subtitle={dummyText}
        dark={false}
        id="section4"
        />
        <FaSections
        title="برنامه"
        subtitle={dummyText}
        dark={true}
        id="section5"
        />
        <FaSections
        title="حامیان"
        subtitle={dummyText}
        dark={false}
        id="section9"
        />
        <ContactSectionContainer
        title="تماس با ما"
        dark={true}
        id="section10"
        />
    </>
)


export const EngSection = () => (
    <>
        <EngSections
        title="Schedule"
        subtitle={dummyText}
        dark={true}
        id="section5"
        />
        <EngSections
        title="About"
        subtitle={dummyText}
        dark={false}
        id="section3"
        />
        <EngSections
        title="Sponsors"
        subtitle={dummyText}
        dark={true}
        id="section9"
        />
        <EngSections
        title="Event"
        subtitle={dummyText}
        dark={false}
        id="section4"
        />
        <ContactSectionContainer
        title="Infromation"
        dark={true}
        id="section10"
        />
    </>
)


export const FaSections = ({ title, subtitle, dark, id }) => (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
)


export const EngSections = ({ title, subtitle, dark, id }) => (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="engSection-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
)



export const NavbarFa = () => (
    <>
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
            to="section10"
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
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            برنامه
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
            صفحه اصلی
            </Link>
        </li>
    </>
)


export const NavbarEng = () => (
    <>
        <li className="nav-item">
            <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            Home
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
            Schedule
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
            About
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
            Sponsors
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
            Event
            </Link>
        </li>
        <li className="nav-item">
            <Link
            activeClass="active"
            to="section10"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            Information
            </Link>
        </li>
    </>
)


export const FaContactSection = () => (
    <>
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
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            برنامه  
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
    </>
)




export const EngContactSection = () => (
    <>
        <div className='menuContact' style={{ alignItems: 'flex-start' }}>
            <li className="navItem">
                <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                Home
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
                Schedule  
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
                About
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
                Sponsors
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
                Event
                </Link>
                </li>

        </div>
        <div className='contactUsDiv' style={{ alignItems: 'flex-start' }}>
            <span>Contact Info:</span>
            <span>Address:</span>
            <span>Email:</span>
            <span>Phone Number:</span>
        </div>
    </>
)


export const EngSignUpNavbar = () => (
    <nav className="nav" id="navbar">
        <div className="nav-contents">
            <li className="nav-items">
              <LinkTo to='/' className='signUpLinks'>Home</LinkTo>
            </li>
        </div>
      </nav>
)


export const FaSignUpNavbar = () => (
    <nav className="nav" id="navbar">
        <div className="nav-contents">
            <li className="nav-items">
              <LinkTo to='/' className='signUpLinks'>صفحه اصلی</LinkTo>
            </li>
        </div>
      </nav>
)

