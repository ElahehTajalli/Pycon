import React, { Component } from "react"
import { Link as LinkTo } from 'react-router-dom'
import { NavbarFa, NavbarEng, FaMobileNavbar, EngMobileNavbar } from './mutliLang'
import { getLang } from '../action/Pycon'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, animateScroll as scroll } from "react-scroll"


const theme={}
export default class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      eng : false,
      changeLang : 'en',
      open: false,
      height: 0,
      width: 0
    }
  }

  updateDimensions () {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    window.addEventListener('resize', ()=>this.updateDimensions());
  }
  componentWillUnmount() {
    window.removeEventListener('resize', ()=>this.updateDimensions());
  }

  handleDrawerOpen () {
    this.setState({open: true})
  }

  handleDrawerClose () {
    this.setState({open: false})
  }

  handleLang() {
    this.handleDrawerClose()
    if(this.props.en){
      this.setState({ eng: false, changeLang: 'en' },()=>this.props.dispatch(getLang(this.state.eng , this.state.changeLang)))
    }
    else if (!this.props.en) {
      this.setState({ eng: true, changeLang: 'fa' },()=>this.props.dispatch(getLang(this.state.eng , this.state.changeLang)))

    }
    else if (!this.state.eng){
        this.setState({ eng: true, changeLang: 'fa' },()=>this.props.dispatch(getLang(this.state.eng , this.state.changeLang)))
    }
    else {
      this.setState({ eng: false, changeLang: 'en' },()=>this.props.dispatch(getLang(this.state.eng , this.state.changeLang)))
    }
  }


  render() {    
    return (
      <nav className="nav" id="navbar">
        {window.innerWidth>780 && 
          <div className="nav-content">
            <LinkTo to='/' className="lang" onClick={() => this.handleLang()}>{this.props.changeLang}</LinkTo>
            {!this.props.en && 
                <NavbarFa />
              }
            {this.props.en &&
              <NavbarEng />
            }       
          </div>
        }
        { window.innerWidth<=780 &&
        <div className="mobile-nav">
          <LinkTo to='/' className="lang" onClick={() => this.handleLang()}>{this.props.changeLang}</LinkTo>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={()=>this.handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            variant="persistent"
            anchor="right"
            open={this.state.open}
            >
            <div>
              <IconButton onClick={()=>this.handleDrawerClose()}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            {!this.props.en && 
              <div className='mobileNavbar'>
              <li className="navItemMobile" >
              <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              صفحه اصلی
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              درباره پایکان
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              محور های همایش
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              برنامه  
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section10"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              سوالات متداول
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section9"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              حامیان
              </Link>
              </li>
              <li className="navItemMobile">
              <Link
              activeClass="active"
              to="section10"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={()=>this.handleDrawerClose()}
              >
              تماس با ما
              </Link>
              </li>
          </div>
            }
            {this.props.en &&
              <div className='mobileNavbar'>
              <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  Home
                  </Link>
                  </li>
                  <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  Schedule  
                  </Link>
                  </li>
                  <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  About
                  </Link>
                  </li>
      
                  <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section9"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  Sponsors
                  </Link>
                  </li>
      
                  <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  Event
                  </Link>
                  </li>

                  <li className="navItemMobile">
                  <Link
                  activeClass="active"
                  to="section10"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={()=>this.handleDrawerClose()}
                  >
                  Information
                  </Link>
                  </li>
          </div>
            }       
            
          </Drawer>
          </div>
        }
    </nav>
        
       )
  }
}