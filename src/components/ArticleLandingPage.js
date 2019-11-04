import React from 'react'
import logo from '../photos/signUpLogo.svg'
import { Link } from 'react-router-dom'
import { FaSignUpNavbar } from './mutliLang'



export default class SignUp extends React.Component {
    render () {
        return (
            <div className='signUpDiv'>
                <FaSignUpNavbar />
                <img src={logo}/>
                <div className='payText'>
                    <p>.ثبت نام شما با عنوان ارسال مقاله موفقیت آمیز بود</p>
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