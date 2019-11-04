import React, { Component } from "react"
import { Link, animateScroll as scroll } from "react-scroll"
import { EngContactSection, FaContactSection } from "./mutliLang"


export default class ContacteSection extends Component {
    render() {
        return (
            <div className={"section" + (this.props.dark ? " section-dark" : "")}>
              {this.props.en && 
                <div className="engSection-content" id={this.props.id}>
                   <h1>{this.props.title}</h1>
                    <div className='contactSection'>
                        <EngContactSection />
                    </div> 
                  </div>
              }
              {!this.props.en && 
                <div className="section-content" id={this.props.id}>
                   <h1>{this.props.title}</h1>
                    <div className='contactSection'>
                      <FaContactSection />
                    </div> 
                  </div>
              }
            </div>
       
        )
    }
}