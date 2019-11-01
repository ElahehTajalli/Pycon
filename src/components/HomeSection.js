import React, { Component } from "react"
import logo from '../photos/mainLogo.svg'
import Countdown from './Countdown'
import { Link  } from 'react-router-dom'


export default class HomeSection extends Component {
    render() {
        return (
        <div style={{height: '100vh'}} id={this.props.id}>
          <img src={logo}/>
          <div className='timeDiv'>
            <div className='buttons'>
              <Link to='/signUp/' className='signUpLink'>ثبت نام شرکت کننده</Link>
              <button className='sendButton'>ارسال مقالات</button>
            </div>
            <Countdown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
          </div>
        </div>
        )
    }
}