import React, { Component } from "react"
import { Link as LinkTo } from 'react-router-dom'
import { NavbarFa, NavbarEng } from './mutliLang'
import { getLang } from '../action/Pycon'

export default class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      eng : false,
      changeLang : 'en'
    }
  }

  handleLang() {
    if (!this.state.eng){
      this.setState({ eng: true, changeLang: 'fa' },()=>this.props.dispatch(getLang(this.state.eng)))
    }
    else {
      this.setState({ eng: false, changeLang: 'en' },()=>this.props.dispatch(getLang(this.state.eng)))
    }
  }


  render() {        
    return (
      <nav className="nav" id="navbar">
      <div className="nav-content">
      <LinkTo to='/' className="lang" onClick={() => this.handleLang()}>{this.state.changeLang}</LinkTo>

      {!this.state.eng && 
          <NavbarFa />
        }
        {this.state.eng &&
          <NavbarEng />
        }       

      </div>
    </nav>
        
       )
  }
}