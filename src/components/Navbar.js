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
      <div className="nav-content">
      <LinkTo to='/' className="lang" onClick={() => this.handleLang()}>{this.props.changeLang}</LinkTo>

      {!this.props.en && 
          <NavbarFa />
        }
      {this.props.en &&
        <NavbarEng />
      }       

      </div>
    </nav>
        
       )
  }
}