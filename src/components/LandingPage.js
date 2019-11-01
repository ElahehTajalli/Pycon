import React from 'react'
import TextField from '@material-ui/core/TextField';
import logo from '../photos/signUpLogo.svg'
import Navbar from "./SignUpNavbar"
import { Link } from 'react-router-dom'

import ConfirmInfo from '../components/ConfirmInfo'
import Slide from '@material-ui/core/Slide'
import { getInformation } from '../action/Pycon'



export default class SignUp extends React.Component {


    render () {
        return (
            <div className='signUpDiv'>
                <Navbar />
                <img src={logo}/>
                <div className='payText'>
                    <p>.شما با موفقیت ثبت نام کردید</p>
                </div>
                <div className='informationDiv'>
                    <p><b>نام و نام خانوادگی :</b>     {this.props.firstname} {this.props.lastname}</p>
                    <p>{this.props.email}    <b> : ایمیل</b></p>
                    <p>    <b> : شناسه پرداخت</b></p>

                    <div className='buttonsDiv'>
                        <button type='submit' className='prevButton'>چاپ رسید</button>
                        <Link to='/' className='prevButton'>صفحه اصلی</Link>
                    </div>
                </div>
                
                

                
            </div>
        )   
}
    
}