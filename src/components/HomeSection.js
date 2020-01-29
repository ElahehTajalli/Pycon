import React, { Component } from "react"
import logo from '../photos/mainLogo.svg'
import CountdownContainer from '../container/CountdownContainer'
import { Link  } from 'react-router-dom'


export default class HomeSection extends Component {
    render() {
        return (
        <div style={{height: '100vh'}} id={this.props.id}>
          <img src={logo}/>
          <div className='timeDiv'>
            {!this.props.en &&
              <div className='buttons'>
              <Link to='/articles/' className='sendButton'>ارسال مقالات</Link>
              <Link to='/signUp/' className='signUpLink'>ثبت نام شرکت کننده</Link>
              {/* <button className='sendButton'>ارسال مقالات</button> */}
            </div>
            }
             {this.props.en &&
              <div className='buttons'>
              <Link to='/enArticles/' className='sendButton'>Submit paper</Link>
              <Link to='/enSignUp/' className='signUpLink'>Register as participant</Link>
            </div>
            }
            
            <CountdownContainer timeTillDate="07 29 2020, 1:00 am" timeFormat="MM DD YYYY, h:mm a" />
          </div>
        </div>
        )
    }
}